<template>
  <div class="file-status">
    {{ status }}
  </div>
</template>

<style lang="scss">
@import "./FileStatus.scss";
</style>

<script>
export default {
  components: {},
  props: {
    file: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    status() {
      if (this.file.IsMissing) {
        return "Missing";
      } else if (this.file.IsPaused) {
        return "Paused";
      } else if (this.file.IsDownloading) {
        return "Downloading";
      } else if (this.file.IsUploading) {
        return "Seeding";
      } else if (this.file.IsAvailable) {
        return "Completed";
      } else if (this.file.IsHashing) {
        return "Hashing";
      } else {
        return "-";
      }
    },
  },
};
</script>
