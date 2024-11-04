


function Payment() {
    return ( 
<div class="py-8 px-8 space-y-4 max-w-xl mx-auto bg-white rounded-xl shadow-lg sm:py-4">
    <h2 class="text-lg font-bold text-black">Payment method</h2>

    <label class="flex items-center p-4 border rounded-lg cursor-pointer has-[:checked]:bg-indigo-50 has-[:checked]:text-indigo-900 has-[:checked]:ring-2 has-[:checked]:ring-indigo-200">
        <input type="radio" name="payment" class="hidden peer" />
        <svg fill="currentColor" class="text-indigo-500 w-6 h-6 mr-4">
        </svg>
        <span class="font-medium">Google Pay</span>
        <div class="ml-auto text-indigo-500 peer-checked:visible">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                <circle cx="12" cy="12" r="6" fill="currentColor"/>
            </svg>
        </div>
    </label>

    <label class="flex items-center p-4 border rounded-lg cursor-pointer has-[:checked]:bg-indigo-50 has-[:checked]:text-indigo-900 has-[:checked]:ring-2 has-[:checked]:ring-indigo-200">
        <input type="radio" name="payment" class="hidden peer" />
        <svg fill="currentColor" class="text-gray-500 w-6 h-6 mr-4">
        </svg>
        <span class="font-medium">Apple Pay</span>
        <div class="ml-auto text-gray-500 peer-checked:visible">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
            </svg>
        </div>
    </label>

    <label class="flex items-center p-4 border rounded-lg cursor-pointer has-[:checked]:bg-indigo-50 has-[:checked]:text-indigo-900 has-[:checked]:ring-2 has-[:checked]:ring-indigo-200">
        <input type="radio" name="payment" class="hidden peer" />
        <svg fill="currentColor" class="text-gray-500 w-6 h-6 mr-4">
        </svg>
        <span class="font-medium">Credit Card</span>
        <div class="ml-auto text-gray-500 peer-checked:visible">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
            </svg>
        </div>
    </label>
</div>

    );
}

export default Payment;