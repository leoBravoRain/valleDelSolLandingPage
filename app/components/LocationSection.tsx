export default function LocationSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <div>
              <p className="text-sm uppercase tracking-wider text-gray-600 mb-2">
                NUESTRA <strong>UBICACIÓN</strong>
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                ES INMEJORABLE
              </h2>
            </div>

            <div className="space-y-4 text-gray-700">
              <p>
                En el corazón de Quillón, a unos pasos del centro y plaza
                principal, bares, restaurantes y la laguna Avendaño.
              </p>

              <ul className="space-y-2 list-disc list-inside">
                <li>Plaza central de Quillón a 2 min en vehículo.</li>
                <li>Playa balneario Quillón y Cendyr Náutico a 6 min en vehículo.</li>
                <li>Bioparque a 7 min en vehículo.</li>
                <li>Parque Acuático a 5 min en vehículo.</li>
                <li>Viña Lomas de Quillón a 9 min en vehículo.</li>
                <li>Terminal de Buses a 7 min en vehículo.</li>
              </ul>

              <div className="pt-4 border-t border-gray-200">
                <p className="font-medium">
                  Camino a Cerro Negro 1,5 Km, Pasaje los Guindos 467
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Map */}
          <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://maps.google.com/maps?q=complejo%20turistico%20valle%20del%20sol%20quill%C3%B3n&t=m&z=14&output=embed&iwloc=near"
              title="complejo turistico valle del sol quillón"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
