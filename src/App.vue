<template>
  <div class="container">
    <div class="items element-pacing">
      <label>Title</label>
      <input v-model="title" />
    </div>
    <div class="items element-pacing">
      <label>Author</label>
      <input v-model="author" />
    </div>
    <div class="genre element-pacing">
      <label>Genre</label>
      <select name="cars" id="cars" v-model="genre" @change="selectChange">
        <option v-for="genre in genreList" :key="genre" :value="genre">
          {{ genre }}
        </option>
      </select>
    </div>
    <button @click="toEdit ? edit() : add()">
      {{ toEdit ? "Edit" : "Add" }}
    </button>
    <button @click="clear">clear</button>
    <div v-if="displayMessage">
      <p>The book is forbidden to include in the list</p>
    </div>
    <ListPage :showData="showData" :books="bookList" />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      genreList: ["Drama", "Action", "Kids"],
      bannedBookList: ["Ass", "Baddass", "Slave"],
      title: "",
      author: "",
      genre: "Drama",
      toEdit: false,
      displayMessage: false,
      bookList: [],
      pos: 0,
    };
  },
  watch: {
    title(title) {
      if (this.bannedBookList.includes(title)) {
        this.displayMessage = true;
      } else {
        this.displayMessage = false;
      }
    },
  },
  methods: {
    add() {
      const obj = {
        title: this.title,
        author: this.author,
        genre: this.genre,
      };
      this.bookList.push(obj);
    },
    edit() {
      const obj = {
        title: this.title,
        author: this.author,
        genre: this.genre,
      };
      this.bookList.splice(this.pos, this.pos + 1, obj);
      this.toEdit = false;
    },
    showData(book) {
      this.toEdit = true;
      this.title = book.title;
      this.author = book.author;
      this.genre = book.genre;
      this.pos = this.bookList.findIndex((bk) => bk.title === book.title);
    },
    clear() {
      this.toEdit = false;
      this.title = "";
      this.author = "";
      this.genre = "";
    },
  },
};
</script>

<style>
.container {
  width: auto;
}
.element-pacing {
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
}
.items {
  width: 200px;
}
.genre {
  width: 108px;
}
</style>
