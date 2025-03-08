<template>
  <div class="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
    <table class="table">
      <thead>
        <slot name="header" />
      </thead>
      <tbody>
        <slot name="row" />
      </tbody>
    </table>
  </div>
</template>
