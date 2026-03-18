const plants = [
  { name: "Agrimonia Eupatoria", src: "/lovable-uploads/plants/agrimonia-eupatoria.jpg" },
  { name: "Arrowleaf Coltsfoot", src: "/lovable-uploads/plants/arrowleaf-coltsfoot.jpg" },
  { name: "Arisaema Costatum", src: "/lovable-uploads/plants/arisaema-costatum.jpg" },
  { name: "Andrographis Paniculata", src: "/lovable-uploads/plants/andrographis-paniculata.jpg" },
  { name: "Berberis Darwinii", src: "/lovable-uploads/plants/berberis-darwinii.jpg" },
  { name: "Breynia Oblongifolia", src: "/lovable-uploads/plants/breynia-oblongifolia.jpg" },
  { name: "Buttonweed", src: "/lovable-uploads/plants/buttonweed.jpg" },
  { name: "Centella Asiatica", src: "/lovable-uploads/plants/centella-asiatica.jpg" },
  { name: "Commelina Communis", src: "/lovable-uploads/plants/commelina-communis.jpg" },
  { name: "Gonostegia Hirta", src: "/lovable-uploads/plants/gonostegia-hirta.jpg" },
];

const PlantGallery = () => {
  return (
    <div className="my-10">
      <h4 className="text-xl font-bold text-foreground mb-2">
        Plants found during the trip
      </h4>
      <p className="text-muted-foreground mb-6 text-sm italic">
        I identified some of the plant names and also got a chance to increase my knowledge about plants.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {plants.map((plant) => (
          <figure key={plant.name} className="group">
            <div className="overflow-hidden rounded-lg shadow-md aspect-[3/4]">
              <img
                src={plant.src}
                alt={plant.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            <figcaption className="text-center text-xs text-muted-foreground mt-1.5 italic">
              {plant.name}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
};

export default PlantGallery;
