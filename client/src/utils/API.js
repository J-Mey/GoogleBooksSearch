import axios from "axios";

export default {
    searchBook: function (search){
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}`)
    },

    getBooks: function() {
        return axios.get("/api/books");
    },

    getBook: function(id) {
        return axios.get("/api/books/" + id);
    },

    deleteBook: function(id) {
        return axios.delete("./api/books/" + id);
    },

    saveBook: function(bookData) {
        return axios.post("/api/books", bookData);
    }
};