class Navbar extends HTMLElement {
    constructor(){
        super()
        this.innerHTML = `    
        <nav class="bg-wd-darkgrey text-white">
            <div class="max-w-6xl mx-auto px-4">
            <div class="flex justify-between">
                <div class="flex space-x-4 px-2">
                <div class="flex items-center space-x-1">
                    <a href="./index.html" class="py-5 px-3 hover:text-gray-100"
                    >Home</a
                    >
                    <a href="./blogs.html" class="py-5 px-3 hover:text-gray-100"
                    >Blog</a
                    >
                    <a href="./contact.html" class="py-5 px-3 hover:text-gray-100"
                    >Contact</a
                    >
                </div>
                </div>
            </div>
            </div>
        </nav> 
        `
    
    }
}

customElements.define('my-navbar',Navbar)