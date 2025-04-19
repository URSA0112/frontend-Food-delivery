export default function Bottom(){
    return(
        <div className="border-t-2 border-gray-300 dark:border-gray-700 pt-4 m-5 text-center">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          © 2024 NomNom LLC. All rights reserved.
        </p>
        <div className="space-x-4 text-sm mt-2">
          <a href="/privacy-policy" className="hover:text-orange-400">Privacy Policy</a>
          <a href="/terms" className="hover:text-orange-400">Terms and Conditions</a>
          <a href="/cookie-policy" className="hover:text-orange-400">Cookie Policy</a>
        </div>
      </div>

    )
}