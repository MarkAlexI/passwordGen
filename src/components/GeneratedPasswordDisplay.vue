<template>
  <div>
    <strong>Generated Password:</strong>
    <p>{{ generatedPassword }}</p>
    <button
      class="copy-btn"
      @click="copyPassword"
    >Copy!</button>
    <p
      v-if="copyStatus"
      :class="copyStatusClass"
    >{{ copyStatus }}</p>
  </div>
</template>

<script setup>
  import { ref, watch } from "vue";

  const props = defineProps(["generatedPassword"]);

  const copyStatus = ref("");
  const copyStatusClass = ref("");

  let copyPassword = () => {
    console.log("Don't have permissions to write on clipboard!");
  };

  if (navigator.permissions?.query) {
    navigator.permissions.query({ name: "clipboard-write" }).then((result) => {
      if (result.state == "granted" || result.state == "prompt") {
        alert("Write access granted!");

        let text = props.generatedPassword;

        copyPassword = async () => {
          try {
            await navigator.clipboard.writeText(text);

            copyStatus.value = "Content copied to clipboard!";
            copyStatusClass.value = "success";
            console.log("Content copied to clipboard");
          } catch (error) {
            copyStatus.value = "Failed to copy content!";
            copyStatusClass.value = "error";
            console.error("Failed to copy: ", error);
          }
        };
      }
    }).catch((error) => {
      console.log(error);
    });
  }

  watch(() => props.generatedPassword, () => {
    copyStatus.value = "";
    copyStatusClass.value = "";
  });
</script>

<style lang="scss">
$light-text-color: white;
$dark-bg: #222;
$dark-btn-border: #555;
$btn-border-radius: 1.5rem;
$btn-padding: .5em 1.5em;
$btn-margin: 1rem auto;
$success-color: #4caf50;
$error-color: #f44336;

p {
  text-align: center;
  color: $light-text-color;
  word-break: break-all;
}

.copy-btn {
  background: $dark-bg;
  border: solid 1px $dark-btn-border;
  border-radius: $btn-border-radius;
  font: inherit;
  padding: $btn-padding;
  margin-bottom: $btn-margin;
  margin-left: auto;
  margin-right: auto;
  display: block;
  transition: background 0.3s ease;

  &:hover {
    background: darken($dark-bg, 10%);
  }

  &:active {
    background: lighten($dark-bg, 10%);
  }
}

.success {
  color: $success-color;
  text-align: center;
  margin-top: 0.5rem;
}

.error {
  color: $error-color;
  text-align: center;
  margin-top: 0.5rem;
}
</style>
