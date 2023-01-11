<script setup>
import { ref } from "vue";
const formValues = ref({
  name: "",
  profileSummary: "",
  country: "",
  jobLocation: [],
  remoteWork: "no",
  skillSet: [],
  yearsOfExperience: "",
  age: null,
});

function submitForm() {
  console.log("Form values", formValues);
}
</script>

<template>
  <div>
    <pre>
        {{ JSON.stringify(formValues, null, 2) }}
    </pre>
  </div>
  <form @submit.prevent="submitForm">
    <div>
      <label for="name">Name</label>
      <input type="text" id="name" v-model.trim.lazy="formValues.name" />
    </div>
    <div>
      <label for="profile">Profile</label>
      <textarea id="profile" v-model="formValues.profileSummary" />
    </div>
    <div>
      <label for="country">Country</label>
      <select id="country" v-model="formValues.country">
        <option value="">Select a country:</option>
        <option value="india">India</option>
        <option value="vietnam">Vietnam</option>
        <option value="singapore">Singapore</option>
      </select>
    </div>
    <div>
      <label for="job-location">Job location</label>
      <select id="job-location" multiple v-model="formValues.jobLocation">
        <option value="india">India</option>
        <option value="vietnam">Vietnam</option>
        <option value="singapore">Singapore</option>
      </select>
    </div>
    <div>
      <input
        type="checkbox"
        id="remoteWork"
        v-model="formValues.remoteWork"
        true-value="yes"
        false-value="no"
      />
      <label for="remoteWork">Open to remote work?</label>
    </div>
    <div>
      <label>Skill set</label>
      <input
        type="checkbox"
        id="html"
        value="html"
        v-model="formValues.skillSet"
      />
      <label for="html">HTML</label>
      <input
        type="checkbox"
        id="css"
        value="css"
        v-model="formValues.skillSet"
      />
      <label for="css">CSS</label>
      <input
        type="checkbox"
        id="javascript"
        value="javascript"
        v-model="formValues.skillSet"
      />
      <label for="javascript">JavaScript</label>
    </div>
    <div>
      <label>Years of experience</label>
      <input
        type="radio"
        id="0-2"
        value="0-2"
        v-model="formValues.yearsOfExperience"
      />
      <label for="html">0-2</label>
      <input
        type="radio"
        id="3-5"
        value="3-5"
        v-model="formValues.yearsOfExperience"
      />
      <label for="css">3-5</label>
      <input
        type="radio"
        id="5-10"
        value="5-10"
        v-model="formValues.yearsOfExperience"
      />
      <label for="javascript">5-10</label>
      <input
        type="radio"
        id="+10"
        value="+10"
        v-model="formValues.yearsOfExperience"
      />
      <label for="javascript">+10</label>
    </div>
    <div>
      <label for="age">Age</label>
      <input
        @keyup.enter="submitForm"
        type="number"
        id="age"
        v-model.number="formValues.age"
      />
    </div>
    <div>
      <button>Submit</button>
    </div>
  </form>
</template>
