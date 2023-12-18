<template>
  <ContentDoc v-slot="{ doc }">
    <main class="h-full overflow-y-auto flex-1">
      <article
        :id="item.title"
        class="prose prose-xl py-20 m-auto px-10"
        v-for="(item, index) in doc.children"
        :key="index"
      >
        <h1>
          <a :href="`#${item.title}`" class="no-underline">{{ item.title }}</a>
        </h1>
        <p class="text-base-content/50">{{ doc.title }}</p>
        <p v-for="poem in item.content" :key="poem">{{ poem }}</p>
      </article>
    </main>
    <aside class="w-72 h-full bg-base-200 p-4">
      <h1 class="text-2xl text-center font-mono">{{ doc.title }}</h1>
    </aside>
  </ContentDoc>
</template>
