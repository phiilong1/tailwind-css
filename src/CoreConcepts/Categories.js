

function Categories() {
    return (
        <div className="py-8 px-8 max-w-xl mx-auto space-y-4 bg-white rounded-xl shadow-lg sm:py-4 sm:space-y-4">
            <h2 className="text-lg font-bold text-black pl-10">Categories</h2>
            <div className="flex flex-wrap gap-3 justify-center">
                <span className="px-3 py-1 bg-blue-50 text-blue-500 rounded-full font-medium">Sales</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-500 rounded-full font-medium">Marketing</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-500 rounded-full font-medium">SEO</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-500 rounded-full font-medium">Analytics</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-500 rounded-full font-medium">Design</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-500 rounded-full font-medium">Strategy</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-500 rounded-full font-medium">Security</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-500 rounded-full font-medium">Growth</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-500 rounded-full font-medium">Mobile</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-500 rounded-full font-medium">UX/UI</span>
            </div>
        </div>
    );
}

export default Categories;
