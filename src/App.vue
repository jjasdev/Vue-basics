<script setup>
///import { ref } from "vue";
import { provide, ref, reactive } from "vue";
//import ConditionalRender from "./components/ConditionalRender.vue";
//import FormComponent from "./components/FormComponent.vue";
//import EventComponent from "./components/EventComponent.vue";
//import ComputedProperties from "./components/ComputedProperties.vue";
///import WatcherProperties from "./components/WatcherProperties.vue";
//import GreetComponent from "./components/GreetComponent.vue";
//const name = ref("Juanjo");
//const company = ref("Global");
//import ArticleComponent from "./components/ArticleComponent.vue";
import ComponentFather from "./components/ComponentFather.vue";
const title = ref("PROVIDE & INJECT");
const count = ref(0);
const dataUser = reactive({
  name: "Juanjo",
  company: "global",
  count: 0,
});
provide("TITLE", title);
provide("COUNTER", count);
provide("DATA_USER", dataUser);
provide("incrementCount", incrementCounter);
function incrementCounter() {
  count.value += 1;
  dataUser.count += 1;
}
// import PopupComponent from "./components/PopupComponent.vue";
// const showPopup = ref(false);
// function closePopup(name) {
//   showPopup.value = false;
//   console.log(name);
// }
// import InputComponent from "./components/InputComponent.vue";
// const name = ref("");
// import CardComponent from "./components/CardComponent.vue";
// import NameList from "./components/NameList.vue";
// import UserComponent from "./components/UserComponent.vue";
// import UserList from "./components/UserList.vue";
// import TabA from "./components/TabA.vue";
// import TabB from "./components/TabB.vue";
// import TabC from "./components/TabC.vue";
// const activeTab = ref(TabA);
// const tabs = [TabA, TabB, TabC];
// import CreatePost from "./components/CreatePost.vue";
// import PostList from "./components/PostList.vue";
// import TemplateRef from "./components/TemplateRef.vue";
// import WatcherProperties from "./components/WatcherProperties.vue";
// COMPOSABLES
// import useCounter from "./composables/useCounter";
// const { count, incrementCount } = useCounter
</script>

<template>
  <!-- 
    <ConditionalRender />
    <FormComponent />
    <EventComponent /> 
    <ComputedProperties />
    <WatcherProperties />
    <GreetComponent :name="name" :company="company" />
    <ArticleComponent
      id="my-article"
      style="color: red; font-weight: bold"
      title="Title"
      :likes="3"
      resume="Resumen of this article"
      :is-published="true"
      />
    <ComponentFather />
    <button @click="showPopup = true">Show button</button>
    <PopupComponent v-show="showPopup" @close="closePopup" />
    <InputComponent v-model="name" />
    <CardComponent />
    <CardComponent> Card content </CardComponent>
    <CardComponent> <h2>Card content</h2> </CardComponent>
    <CardComponent>
      <template #header>
        <h3>Header</h3>
      </template>
      <template #default>
        <button>View details</button>
      </template>
      <template #footer>
        <p>Copyright Juanjo</p>
      </template>
    </CardComponent>
    <NameList>
      <template #users="{ fullName }">
        {{ fullName.firstName }} {{ fullName.lastName }}
      </template>
    </NameList>
    <UserList>
      <template #userlist="{ count }">
        {{ count }}
      </template>
      <template #users="{ remove, data }">
        <UserComponent>
          <p>{{ data.firstName }}</p>
          <button @click="remove(data)">Remove user</button>
        </UserComponent>
      </template>
    </UserList>
    <button
      v-for="tab in tabs"
      :key="tab"
      @click="activeTab = tab"
      v-text="tab.__name"
    ></button>
    <keep-alive><component :is="activeTab" /></keep-alive>
  -->

  <!-- <TabA v-if="activeTab === 'TabA'" />
  <TabB v-if="activeTab === 'TabB'" />
  <TabC v-if="activeTab === 'TabC'" /> -->

  <!-- <PostList />
  <CreatePost /> -->
  <!-- <TemplateRef />
  <WatcherProperties /> -->
  <ComponentFather />
  <button @click="incrementCounter">Like</button>
</template>
