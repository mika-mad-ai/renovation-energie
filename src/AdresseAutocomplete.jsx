import React, { useEffect, useRef } from "react";

// Le composant accepte maintenant une propriété "onPlaceSelected" pour communiquer avec la page Home.
const AdresseAutocomplete = ({ onPlaceSelected }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    let autocomplete;

    const initAutocomplete = async () => {
      // On s'assure que la librairie est chargée
      if (!window.google || !window.google.maps || !window.google.maps.importLibrary) {
          console.error("L'API Google Maps n'est pas prête.");
          return;
      }
      
      const { Autocomplete } = await window.google.maps.importLibrary("places");
      
      const input = inputRef.current;
      if (!input) return;

      autocomplete = new Autocomplete(input, {
        fields: ["address_components", "geometry", "name", "formatted_address"],
        types: ["address"],
        componentRestrictions: { country: "fr" },
      });

      // On écoute l'événement "place_changed"
      autocomplete.addListener("place_changed", () => {
        const place = autocomplete.getPlace();
        
        if (!place.geometry || !place.address_components) {
          console.warn(`Aucun détail disponible pour : '${place.name}'`);
          if (onPlaceSelected) {
            onPlaceSelected({ formatted_address: input.value });
          }
          return;
        }

        // --- CORRECTION FINALE ---
        // On reconstruit l'adresse manuellement pour inclure le code postal.
        const getComponent = (type) => {
          const component = place.address_components.find((c) => c.types.includes(type));
          return component ? component.long_name : "";
        };

        const city = getComponent("locality");
        const postalCode = getComponent("postal_code");
        
        // On utilise l'adresse formatée de base (qui contient souvent la rue et le numéro)
        // et on s'assure que le code postal et la ville sont bien présents.
        // place.name contient souvent la partie "numéro + rue"
        const addressName = place.name;
        const fullAddress = `${addressName}, ${postalCode} ${city}`;

        console.log("🏡 Adresse reconstruite et complète :", fullAddress);
        
        // On met à jour la valeur de l'input pour que l'utilisateur voie l'adresse complète
        if(input) {
          input.value = fullAddress;
        }

        // On appelle la fonction passée en props pour remonter l'adresse complète à la page Home.
        if (onPlaceSelected) {
          onPlaceSelected({ formatted_address: fullAddress });
        }
      });
    };

    const loadScript = () => {
      if (document.querySelector('script[src*="maps.googleapis.com"]')) {
          if (window.google && window.google.maps) {
              initAutocomplete();
          }
          return;
      }
      
      const script = document.createElement("script");
      script.src =
        "https://maps.googleapis.com/maps/api/js?key=AIzaSyCfdzeairsFcjagxlyykGtUe2dZoIKYAXw&libraries=places&language=fr&region=FR";
      script.async = true;
      script.defer = true;
      script.onload = initAutocomplete;
      document.head.appendChild(script);
    };

    if (!window.google?.maps?.places) {
      loadScript();
    } else {
      initAutocomplete();
    }

  }, [onPlaceSelected]);

  return (
    <input
      ref={inputRef}
      id="adresse_bien"
      name="adresse_bien"
      type="text"
      placeholder="1 rue de Paris, 75000 Paris"
      required
      className="block w-full bg-white text-gray-900 border border-gray-300 rounded-md px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
    />
  );
};

export default AdresseAutocomplete;
