<template>
  <div>
    <h1>Computed</h1>
    <div style="background-color: #dddddd">
      <p>사용자의 이름을 보여주는 경우 가장 좋은 방법은</p>
      <p>computed를 이용하여 함수를 정의함과 동시에 데이터 키 값을 생성함</p>
      <p>computed는 데이터 값에 변경이 일어나는지 감시함 즉,</p>
      <p>firstName과 lastName의 값 중 하나라도 변경이 일어나면 fullName 함수가 자동 실행되고, fullName 값이 갱신됨</p>
    </div>

    <h2>1. 직접 '+' 연산을 통해 보여주는 방법</h2>
    <h3>{{ firstName + ' ' + lastName }}</h3>

    <h2>2. 함수를 호출하여 보여주는 방법 </h2>
    <h3>{{ getFullName() }}</h3>

    <h2>*3. Computed를 이용하여 보여주는 방법</h2>
    <h3>{{ fullName }}</h3>

    <h1>Watch</h1>
    <div style="background-color: #dddddd">
      <p>watch 역시 computed처럼 Vue 인스턴스에 정의된 데이터 값이 변경이 일어나는지를 감시하고,</p>
      <p>변경이 일어나면 지정된 함수를 실행시킬 수 있습니다.</p>
      <p>하지만 computed의 경우는 기존에 정의된 데이터 값을 기반으로 새로운 데이터 값을 활용하기 위해서 사용된다면</p>
      <p>watch는 watch에 정의된 데이터 값 하나만을 감시하기 위한 용도로 사용됩니다.</p>
      <p>또한 watch의 경우는 computed와 다르게 실제 데이터 변경이 일어나기 전까지는 실행되지 않습니다 즉,</p>
      <p>초기에 지정된 값인 firstName과 lastName에 값이 있음에도 불구하고 해당 초기값의 변경이 일어나야 watch가 실행됩니다.</p>
    </div>

    <h2>Full Name : {{ watchFullName }}</h2>
    <button type="button" @click="changeName()">변경</button>

  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: 'Jeong',
      lastName: 'Jaeho',
      watchFirstName: 'Jeong',
      watchLastName: 'Jaeho',
      watchFullName: ''
    }
  },
  methods: {
    getFullName() {
      return this.firstName + ' ' + this.lastName;
    },
    changeName() {
      this.watchFirstName = 'AAA';
    }
  },
  computed: {
    fullName() {
      return this.firstName + ' ' + this.lastName;
    }
  },
  watch: {
    watchFirstName() {
      this.watchFullName = this.watchFirstName + ' ' + this.watchLastName;
    },
    watchLastName() {
      this.watchFullName = this.watchFirstName + ' ' + this.watchLastName;
    }
  }
}
</script>

<style scoped>

</style>