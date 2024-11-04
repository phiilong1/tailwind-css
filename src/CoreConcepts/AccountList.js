function AccountList() {
    return (
        <div className="w-full sm:w-[60rem] rounded-3xl bg-sky-100 p-5 sm:p-24 mt-10 mx-auto">
            <div className="text-center sm:text-left">heloooooo</div>
            <div className="flex flex-col">
                <h1 className="text-2xl sm:text-3xl font-bold">Accounts</h1>

                <div className="flex flex-col sm:flex-row items-center sm:justify-between p-5 mt-5 hover:bg-[#FAF2FE] rounded-xl">
                    <div className="flex items-center space-x-4">
                        <img 
                            className="w-12 h-12 sm:w-16 sm:h-16 rounded-full" 
                            src="https://img.freepik.com/premium-vector/dropbox-logo-icon-cloud-storage-file-sharing-symbol_628407-1819.jpg?w=360" 
                            alt="Dropbox logo"
                        />
                        <div>
                            <h2 className="text-xl sm:text-2xl font-semibold">Dropbox</h2>
                            <p>dropbox.com</p>
                        </div>
                    </div>
                    <div className="mt-4 sm:mt-0">24 accounts</div>
                    <button className="bg-white rounded-full p-2 mt-4 sm:mt-0">
                        <svg className="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M10.83 5a3.001 3.001 0 0 0-5.66 0H4a1 1 0 1 0 0 2h1.17a3.001 3.001 0 0 0 5.66 0H20a1 1 0 1 0 0-2h-9.17ZM4 11h9.17a3.001 3.001 0 0 1 5.66 0H20a1 1 0 1 1 0 2h-1.17a3.001 3.001 0 0 1-5.66 0H4a1 1 0 1 1 0-2Zm1.17 6H4a1 1 0 1 0 0 2h1.17a3.001 3.001 0 0 0 5.66 0H20a1 1 0 1 0 0-2h-9.17a3.001 3.001 0 0 0-5.66 0Z"/>
                        </svg>
                    </button>
                </div>

                
            </div>
        </div>
    );
}

export default AccountList;
