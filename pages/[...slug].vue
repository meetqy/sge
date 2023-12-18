<template>
  <ContentDoc v-slot="{ doc }">
    <main class="h-full overflow-y-auto flex-1">
      <article
        :id="item.title"
        class="text-center prose prose-xl py-20 px-10"
        v-for="(item, index) in doc.children"
        :key="index"
      >
        <h1>
          <a :href="`#${item.title}`" class="no-underline">{{ item.title }}</a>
        </h1>
        <p v-for="poem in item.content" :key="poem">{{ poem }}</p>
      </article>
    </main>
    <aside class="w-72 h-full bg-base-200 p-4">
      <h1 class="text-2xl text-center font-mono">{{ doc.title }}</h1>
      <div class="mt-4">
        <div
          class="badge badge-primary badge-outline mr-1"
          v-for="item in doc.tags"
          :key="item"
        >
          {{ item }}
        </div>
      </div>
    </aside>
  </ContentDoc>
</template>
