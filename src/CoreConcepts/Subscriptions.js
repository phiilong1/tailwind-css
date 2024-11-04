function Subscriptions() {
    return ( 
        <div className="space-y-14 rounded-3xl bg-gray-300 p-8 md:p-16 lg:p-20 [text-wrap:balance] mt-6 max-w-full">
            <h1 className="font-black text-2xl md:text-3xl text-center">Get the most out of your mobile with the right Subscriptions</h1>

            <p className="text-lg mt-6 [text-wrap:balance] text-center max-w-full">
                All devices come with free delivery or pickup as standard. See information on available shopping options for your location.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
                {/* Subscription Card 1 */}
                <div className="p-6 md:p-10 rounded-xl bg-white" style={{ boxShadow: "-1.5rem -1rem 0 0 #FFFBEC" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 40 40">
                        <path fill="#F06225" d="M20 0c11.046 0 20 8.954 20 20v14a6 6 0 0 1-6 6H21v-8.774c0-2.002.122-4.076 1.172-5.78a10 10 0 0 1 6.904-4.627l.383-.062a.8.8 0 0 0 0-1.514l-.383-.062a10 10 0 0 1-8.257-8.257l-.062-.383a.8.8 0 0 0-1.514 0l-.062.383a9.999 9.999 0 0 1-4.627 6.904C12.85 18.878 10.776 19 8.774 19H.024C.547 8.419 9.29 0 20 0Z"></path>
                        <path fill="#F06225" d="M0 21h8.774c2.002 0 4.076.122 5.78 1.172a10.02 10.02 0 0 1 3.274 3.274C18.878 27.15 19 29.224 19 31.226V40H6a6 6 0 0 1-6-6V21ZM40 2a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"></path>
                    </svg>
                    <h3 className="mt-4 font-bold text-lg">Ice Mobile 10GB</h3>
                    <p className="text-base">Up to 100Mbit/s</p>
                    <div className="mt-4">
                        <span className="text-2xl font-bold">299,-</span>
                        <span>/month</span>
                    </div>
                    <button className="mx-auto block mt-10 px-4 py-2 rounded-full border-[1px] bg-gray-200 hover:bg-gray-300 shadow-md">Add Subscriptions</button>
                </div>

                {/* Subscription Card 2 */}
                <div className="p-6 md:p-10 rounded-xl bg-white" style={{ boxShadow: "-1.5rem -1rem 0 0 #FFCCFF" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 40 40">
                        <path fill="#F06225" d="M20 0c11.046 0 20 8.954 20 20v14a6 6 0 0 1-6 6H21v-8.774c0-2.002.122-4.076 1.172-5.78a10 10 0 0 1 6.904-4.627l.383-.062a.8.8 0 0 0 0-1.514l-.383-.062a10 10 0 0 1-8.257-8.257l-.062-.383a.8.8 0 0 0-1.514 0l-.062.383a9.999 9.999 0 0 1-4.627 6.904C12.85 18.878 10.776 19 8.774 19H.024C.547 8.419 9.29 0 20 0Z"></path>
                        <path fill="#F06225" d="M0 21h8.774c2.002 0 4.076.122 5.78 1.172a10.02 10.02 0 0 1 3.274 3.274C18.878 27.15 19 29.224 19 31.226V40H6a6 6 0 0 1-6-6V21ZM40 2a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"></path>
                    </svg>
                    <h3 className="mt-4 font-bold text-lg">Ice Mobile 10GB</h3>
                    <p className="text-base">Up to 100Mbit/s</p>
                    <div className="mt-4">
                        <span className="text-2xl font-bold">299,-</span>
                        <span>/month</span>
                    </div>
                    <button className="mx-auto block mt-10 px-4 py-2 rounded-full border-[1px] bg-gray-200 hover:bg-gray-300 shadow-md">Add Subscriptions</button>
                </div>

                {/* Subscription Card 3 */}
                <div className="p-6 md:p-10 rounded-xl bg-white" style={{ boxShadow: "-1.5rem -1rem 0 0 #99CCFF" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 40 40">
                        <path fill="#F06225" d="M20 0c11.046 0 20 8.954 20 20v14a6 6 0 0 1-6 6H21v-8.774c0-2.002.122-4.076 1.172-5.78a10 10 0 0 1 6.904-4.627l.383-.062a.8.8 0 0 0 0-1.514l-.383-.062a10 10 0 0 1-8.257-8.257l-.062-.383a.8.8 0 0 0-1.514 0l-.062.383a9.999 9.999 0 0 1-4.627 6.904C12.85 18.878 10.776 19 8.774 19H.024C.547 8.419 9.29 0 20 0Z"></path>
                        <path fill="#F06225" d="M0 21h8.774c2.002 0 4.076.122 5.78 1.172a10.02 10.02 0 0 1 3.274 3.274C18.878 27.15 19 29.224 19 31.226V40H6a6 6 0 0 1-6-6V21ZM40 2a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"></path>
                    </svg>
                    <h3 className="mt-4 font-bold text-lg">Ice Mobile 10GB</h3>
                    <p className="text-base">Up to 100Mbit/s</p>
                    <div className="mt-4">
                        <span className="text-2xl font-bold">299,-</span>
                        <span>/month</span>
                    </div>
                    <button className="mx-auto block mt-10 px-4 py-2 rounded-full border-[1px] bg-gray-200 hover:bg-gray-300 shadow-md">Add Subscriptions</button>
                </div>
                
            </div>

            <div className="text-center">
                <button className="rounded-full bg-blue-600 px-6 py-3 text-white">See all Subscriptions</button>
            </div>
        </div>
    );
}

export default Subscriptions;
