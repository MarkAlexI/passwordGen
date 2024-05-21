<template>
  <div>
    <strong>Generated Password:</strong>
    <p
      ref="passwordText"
    >{{ generatedPassword }}</p>
    <div
      v-if="passLength"
      class="controls">
      <button
        class="copy-btn"
        @click="copyPassword"
      >Copy!</button>
      <button
        class="share-btn"
        @click="sharePassword"
      >Share!</button>
    </div>
    <p
      v-if="copyStatus"
      :class="copyStatusClass"
    >{{ copyStatus }}</p>
  </div>
</template>

<script setup>
  import { ref, watch, computed } from "vue";

  const props = defineProps(["generatedPassword"]);

  const copyStatus = ref("");
  const copyStatusClass = ref("");
  const passwordText = ref(null);

  const sharePassword = () => {
    if (navigator.share) {
      navigator.share({
        title: "Generated Password",
        text: `Here is your generated password: ${props.generatedPassword}`,
        url: window.location.href
      })
      .then(() => {
        console.log("Password shared successfully");
      })
      .catch((error) => {
        console.error("Error sharing: ", error);
      });
    } else {
      console.error("Web Share API is not supported in this browser.");
    }
  };

  let copyPassword = () => {
    console.log("Don't have permissions to write on clipboard!");
    const range = document.createRange();
    range.selectNode(passwordText.value);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);

    try {
      const successful = document.execCommand('copy');
      if (successful) {
        copyStatus.value = "Content copied to clipboard!";
        copyStatusClass.value = "success";
        console.log("Content copied to clipboard");
      } else {
        throw new Error("Copy command was unsuccessful");
      }
    } catch (error) {
      copyStatus.value = "Failed to copy content!";
      copyStatusClass.value = "error";
      console.error("Failed to copy: ", error);
    } finally {
      window.getSelection().removeAllRanges();
    }
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

  const passLength = computed(() => {
    return props.generatedPassword.length > 0;
  });

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
  word-break: break-all;
}

.controls {
  width: 20rem;
  padding: .5rem;
  display: flex;
  justify-content: space-between;
}

.copy-btn, .share-btn {
  background: $dark-bg;
  border: solid 1px $dark-btn-border;
  border-radius: $btn-border-radius;
  font: inherit;
  color: $light-text-color;
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
