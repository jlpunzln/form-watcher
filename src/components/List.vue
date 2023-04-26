<template>
  <table>
    <tr>
      <th>Book</th>
      <th>Author</th>
      <th>Genre</th>
    </tr>
    <tr v-for="book in bookList" :key="book.id" @click="showData(book)">
      <td>{{ book.title }}</td>
      <td>{{ book.author }}</td>
      <td>{{ book.genre }}</td>
    </tr>
  </table>
</template>
<script>
export default {
  name: "ListPage",
  props: ["showData", "books"],
  data() {
    return {
      bookList: this.books,
    };
  },
};
</script>

<style>
table,
th,
td {
  border: 1px solid black;
  border-collapse: collapse;
}
</style>
