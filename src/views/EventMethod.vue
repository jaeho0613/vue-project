<template>
  <div>

    <h1>함수 이벤트</h1>

    <h3>1 증가 함수</h3>
    <button type="button" @click="increaseCounter()">Add 1</button>
    <p>The counter is : {{ counter }}</p>

    <h3>파라미터 함수</h3>
    <button type="button" @click="setCount(7)">Set 7</button>
    <p>The counter2 is : {{ counter2 }}</p>

    <h3>다중 함수 호출</h3>
    <button type="button" @click="one(), two()">Click</button>

    <h1>Change 이벤트</h1>
    <select v-model="selectedValue" @change="changeSelect()">
      <option value="서울">서울</option>
      <option value="부산">부산</option>
      <option value="제주">제주</option>
    </select>

    <h1>Key 이벤트</h1>
    <div>
      <p>Enter</p>
      <input v-model="inputText" @keyup.enter="enterEvent(inputText)"/>
    </div>
    <div>
      <p>Alt + Enter</p>
      <input v-model="inputText" @keyup.alt.enter="enterEvent(inputText)"/>
    </div>
    <div>
      <p>Ctrl + Click</p>
      <input v-model="inputText" @click.ctrl="enterEvent(inputText)"/>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0,
      counter2: 0,
      selectedValue: '',
      inputText: '',
    };
  },
  methods: {
    increaseCounter() {
      this.counter = this.counter + 1;
    },
    setCount(counter2) {
      this.counter2 = counter2;
    },
    one() {
      alert('One');
    },
    two() {
      alert("two");
    },
    changeSelect() {
      alert(this.selectedValue);
    },
    enterEvent(text) {
      alert(text);
    }
  }
}
</script>

<style scoped>

</style>