import React, { useEffect, useState } from 'react';

// --- Composants simples pour l'en-tête et le pied de page ---
function SimulateurHeader() {
  return (
    <header className="w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:py-2 lg:px-8">
        <div className="flex justify-between items-center h-28">
          <a href="/">
            <img src="/RenoHabLogo.webp" alt="RenoHab Logo" className="h-32 w-auto" />
          </a>
          <a
            href="/"
            className="px-6 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition-all"
          >
            ← Retour à l'accueil
          </a>
        </div>
      </div>
    </header>
  );
}

function SimulateurFooter() {
    return (
      <footer className="w-full bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 text-center">
          <p className="mt-4 text-gray-400">
            © {new Date().getFullYear()} RenoHab. Tous droits réservés.
          </p>
        </div>
      </footer>
    );
}


// --- Page Principale du Simulateur ---
export default function Simulateur() {
  const [simulatorUrl, setSimulatorUrl] = useState('');

  useEffect(() => {
    // Construction de l'URL de l'iframe à partir de l'URL de la fenêtre actuelle
    const baseSimulatorUrl = 'https://app.go-kelvin.com/simulator/renohab';
    const searchParams = window.location.search; 
    const fullUrl = baseSimulatorUrl + searchParams;
    setSimulatorUrl(fullUrl);
    console.log("🚀 URL de l'iframe Kelvin construite :", fullUrl);

    // --- LOGIQUE DE CAPTURE DE LEAD - inspirée de votre homepage ---
    const handleKelvinEvent = async (event) => {
      // On vérifie que l'événement vient bien de Kelvin et qu'il s'agit d'un lead
      if (
        typeof event.data === "object" &&
        (event.data.message === "kelvin:simulator:lead_created" || event.data.type === "kelvin:simulator:lead_created")
      ) {
        // On s'assure de ne traiter le lead qu'une seule fois
        if (!window.__kelvin_lead_sent) {
          console.log("✅ Lead Kelvin détecté sur la page /simulateur. Traitement...");
          window.__kelvin_lead_sent = true;

          const lead = event.data.payload || {};
          // CORRECTION : La source est maintenant identique à celle de la homepage pour un routage correct.
          const payload = {
            source: "kelvin", // Changé de "kelvin-simulateur-page" à "kelvin"
            id_simulation: lead.id ?? "",
            created_at: lead.created_at ?? "",
            nom: lead.client?.last_name ?? "",
            prenom: lead.client?.first_name ?? "",
            email: lead.client?.email ?? "",
            telephone: lead.client?.phone_number ?? "",
            profil: lead.client?.ownership_status ?? "",
            type_residence: lead.client?.main_property ? "résidence principale" : "autre",
            adresse: lead.housing?.address ?? "",
            lien_simulation: lead.simulation_url ?? ""
          };
  
          // 1. Envoi des données à votre API/Google Spreadsheet
          try {
            await fetch("/api/submit", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(payload),
            });
            console.log("✅ Lead envoyé à l'API (/api/submit)");
          } catch (err) {
            console.error("❌ Erreur d'envoi du lead à l'API :", err);
          }
  
          // 2. Envoi de l'événement de conversion à Google Analytics
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({
            'event': 'kelvin_lead_created',
            'payload': event.data.payload,
          });
          console.log("✅ Événement 'kelvin_lead_created' envoyé à Google Analytics.");
        }
      }
    };

    window.addEventListener("message", handleKelvinEvent);

    return () => {
      window.removeEventListener("message", handleKelvinEvent);
    };
    
  }, []); // Le tableau de dépendances vide assure que l'effet ne s'exécute qu'une fois.

  // Affiche un message de chargement tant que l'URL n'est pas prête
  if (!simulatorUrl) {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <SimulateurHeader />
            <div className="flex-grow flex items-center justify-center text-center py-20">
                <p className="text-lg font-semibold">Chargement du simulateur...</p>
            </div>
            <SimulateurFooter />
        </div>
    );
  }

  return (
    <div className="w-screen h-screen flex flex-col">
      {/* On n'affiche pas le header/footer une fois le simulateur chargé pour une immersion totale */}
      <iframe
        src={simulatorUrl}
        title="Simulateur DPE Kelvin"
        className="w-full h-full border-0 flex-grow"
        allowFullScreen
      ></iframe>
    </div>
  );
}
