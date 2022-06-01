<template>
  <div class="">
    <Menu as="div" class="inline-block text-left">
      <div>
        <MenuButton
          class="
            flex
            w-full
            items-center
            justify-center
            gap-3
            rounded-md
            bg-red-500 bg-opacity-75
            px-4
            py-2
            font-barlow font-medium
            text-gray-50
            hover:bg-opacity-100
            focus:outline-none
            focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75
          "
        >
          Options
          <ChevronDownIcon class="h-5 w-5 text-gray-50" aria-hidden="true" />
        </MenuButton>
      </div>

      <transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <MenuItems
          class="
            right-0
            mt-2
            w-56
            origin-top-right
            divide-y divide-gray-100
            rounded-md
            bg-white
            shadow-lg
            ring-1 ring-black ring-opacity-5
            focus:outline-none
          "
        >
          <div class="px-1 py-1">
            <MenuItem v-slot="{ active }">
              <button
                :class="[
                  active ? 'bg-red-500 text-white' : 'text-gray-900',
                  'group flex w-full items-center rounded-md px-2 py-2 font-barlow',
                ]"
              >
                <EditIcon :active="active" class="mr-2 h-5 w-5 text-red-500" aria-hidden="true" />
                Créer un participant
              </button>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <button
                :class="[
                  active ? 'bg-red-500 text-white' : 'text-gray-900',
                  'group flex w-full items-center rounded-md px-2 py-2 font-barlow ',
                ]"
              >
                <DuplicateIcon :active="active" class="mr-2 h-5 w-5 text-red-500" aria-hidden="true" />
                Modifier
              </button>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <button
                :class="[
                  active ? 'bg-red-500 text-white' : 'text-gray-900',
                  'group flex w-full items-center rounded-md px-2 py-2 font-barlow ',
                ]"
              >
                <ArchiveIcon :active="active" class="mr-2 h-5 w-5 text-red-500" aria-hidden="true" />
                Supprimer
              </button>
            </MenuItem>
          </div>
        </MenuItems>
      </transition>
    </Menu>
  </div>
</template>

<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import { ChevronDownIcon } from "@heroicons/vue/solid";
</script>
