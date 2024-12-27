import { Link, useLocation } from "react-router-dom"

const PageNotFound = () => {
    const location = useLocation();
    const previousPage = location?.state?.from?.pathname;
    console.log("previousPage", previousPage);
    return (
        <div className="w-screen h-screen bg-gray-800 flex flex-col justify-center items-center">
            <div className="text-slate-400 text-center">
                404 Page Not Found
            </div>
            <div className="text-slate-500 mt-8 hover:text-blue-400 transition-colors duration-200">
                <Link to={previousPage}>Go Back</Link>
            </div>
      </div>
  )
}

export default PageNotFound