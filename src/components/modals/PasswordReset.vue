<template>
  <div class="modal">
    <h1>Enter your new password</h1>
    <form action="">
      <input type="password"  v-model="form.password">
      <input type="password" v-model="form.password">
      <button @click="submit">Submit</button>
    </form>
  </div>
</template>
