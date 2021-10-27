 const baseUri = "http://drrestaa.azurewebsites.net/api/dr"
// const baseUri = "http://jsonplaceholder.typicode.com/posts"

Vue.createApp({
    data() {
        return {
            dr: [],
            error: null,
            id: ""
        
        }
    },
    async created() {
        // created() is a life cycle method, not an ordinary method
        // created() is called automatically when the page is loaded
        console.log("created method called")
        this.helperGetdr(baseUri)
    },

    
    methods: {
        cleanList() {
            this.dr = []
            this.error = null
        },
        async getById(uid) {
            if (uid == null || uid == "") {
                this.error = "No user id ...."
                this.dr = []
            } else {
                const uri = baseUri + "?id=" + uid
                console.log("getById: " + uri)
                this.helperGetdr(uri)
            }
        },
        async helperGetdr(uri) {
            try {
                const response = await axios.get(uri)
                this.dr = await response.data
                this.error = null
            } catch (ex) {
                this.dr = []
                this.error = ex.message
            }
        }
    }

}).mount("#app")