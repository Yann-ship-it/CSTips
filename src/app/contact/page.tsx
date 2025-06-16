export default function ContactPage() {
  return (
    <div className="text-white flex items-center justify-center px-4">
      <div className="w-full max-w-2xl p-8 rounded-2xl bg-gray-900 shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">Contactez-nous</h1>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium">
              Nom
            </label>
            <input
              type="text"
              id="name"
              placeholder="Votre nom"
              className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Votre adresse email"
              className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-2 text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              placeholder="Votre message"
              className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded bg-blue-600 hover:bg-blue-700 transition font-medium"
          >
            Envoyer le message
          </button>
        </form>
      </div>
    </div>
  );
}
