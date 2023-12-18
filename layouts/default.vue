<template>
  <div class="max-w-screen-2xl h-screen m-auto p-4">
    <div class="border h-full shadow rounded-box flex overflow-hidden">
      <aside class="w-72 bg-base-200 flex flex-col">
        <div class="h-20 w-full">
          <div
            class="text-6xl w-full h-full flex justify-center items-center space-x-4 border-b"
          >
            <!-- <span>S</span>
            <span class="text-primary">G</span>
            <span>E</span> -->
          </div>
        </div>
        <div class="overflow-y-auto flex-1">
          <ContentNavigation v-slot="{ navigation }">
            <ul class="menu w-full">
              <li v-for="link of navigation" :key="link._path">
                <NuxtLink
                  :to="link._path"
                  class="flex justify-between items-center"
                  :class="{ active: $route.path.includes(link._path) }"
                >
                  {{ link.title }}
                </NuxtLink>
              </li>
            </ul>
          </ContentNavigation>
        </div>
        <div class="w-full h-20">
          <div class="w-full border-t"></div>
        </div>
      </aside>

      <!-- Nuxt Page -->
      <slot />
    </div>
  </div>
</template>
