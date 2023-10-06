const app = Vue.createApp({
    data() {
        return {
            products: [
                { name: 'Dupa Sembahyang sehari hari', price: 25000, image: 'img/dupa.jpg' },
                { name: 'Tempat Dupa', price: 17000, image: 'img/tpdupa.jpeg' },
                { name: 'Dupa Aroma Terapi', price: 35000, image: 'img/dupaT.jpeg' },
                { name: 'Kalung Genitri', price: 15000, image: 'img/genitrii.jpeg' },
                { name: 'Dupa 24 Jam', price: 50000, image: 'img/dupa2jam.jpeg' },
                { name: 'Kalung Tri Datu Lambang Om Kara', price: 8500, image: 'img/kalung.jpeg' },
                { name: 'Patung Dewa Siwa', price: 35000, image: 'img/patung.jpg' },
            ],
            cart: [],
            wallet: '',
            addWallet: [
                { amount: 1000 },
                { amount: 2000 },
                { amount: 5000 },
                { amount: 10000 },
                { amount: 20000 },
                { amount: 50000 },
                { amount: 100000 },
            ]
        };
    },
    methods: {
        addToCart(product, isDuplicate = false) {
            const existingItem = this.cart.find(item => item.name === product.name);

            if (existingItem) {
                existingItem.quantity++;
            } else {
                this.cart.push({ name: product.name, price: product.price, quantity: 1, image: product.image });
            }
        },
        formatNumber(number) {
            // Menggunakan metode toLocaleString untuk menambahkan titik sebagai pemisah ribuan
            return number.toLocaleString('id-ID');
        },
        addAmount(amount) {
            this.wallet = (parseFloat(this.wallet || 0) + amount);
        },
        removeFromCart(index) {
            const item = this.cart[index];

            if (item.quantity > 1) {
                item.quantity--;
            } else {
                // hapus jika sisa 1
                this.cart.splice(index, 1);
            }
        },
        getTotal() {
            return this.cart.reduce((total, item) => total + item.price * item.quantity, 0);
        },
        resetWallet() {
            // Reset nilai wallet menjadi 0
            this.wallet = '0';
        }
    }
});
app.mount('#app');