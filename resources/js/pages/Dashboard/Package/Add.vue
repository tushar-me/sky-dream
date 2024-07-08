<script setup>
    import AppLayout from "@/components/Layouts/AppLayout.vue";
</script>
<template>
    <AppLayout>
        <div class="bg-white shadow-md p-6 max-w-5xl mx-auto">
            <h3 class="mb-10 text-primary text-xl font-medium">Create a New Package</h3>
            <div>
                <div class="flex items-center flex-wrap">
                    <div class="w-1/2 pr-5 pb-4">
                        <div class="w-full">
                            <label for="name" class="text-sm block mb-2">Package Name</label>
                            <input type="text" class="border border-primary rounded-md font-normal text-sm
                             w-full  focus:ring-primary focus:border-primary">
                        </div>
                    </div>

                    <div class="w-1/2 pr-5 pb-4">
                        <div class="w-full">
                            <label for="name" class="text-sm block mb-2">Sub Title</label>
                            <input type="text" class="border border-primary rounded-md font-normal text-sm
                             w-full  focus:ring-primary focus:border-primary">
                        </div>
                    </div>

                    <div class="w-1/2 pr-5 pb-4">
                        <div class="w-full">
                            <label for="name" class="text-sm block mb-2">Default Price</label>
                            <input type="number" class="border border-primary rounded-md font-normal text-sm
                             w-full  focus:ring-primary focus:border-primary">
                        </div>
                    </div>

                    <div class="w-1/2 pr-5">
                        <div class="w-full">
                            <label for="name" class="text-sm block mb-2">Whatsapp Number</label>
                            <input type="number" class="border border-primary rounded-md font-normal text-sm
                             w-full  focus:ring-primary focus:border-primary">
                        </div>
                    </div>
                </div>

                <div class="w-1/2 py-8">
                    <h2 class="py-2">Items</h2>
                    <div class="flex gap-3">
                        <span class=" w-10 h-9 rounded border border-primary">
                        </span>
                        <div>
                            <input type="number" class="border border-primary rounded-md font-normal text-sm
                             w-full  focus:ring-primary focus:border-primary">
                        </div>
                    </div>
                    <div class="py-2">
                        <h2 class="py-2">Paste SVG </h2>
                        <input type="text" class="border border-primary rounded-md font-normal text-sm
                             w-full  focus:ring-primary focus:border-primary">
                             <button class="my-3 bg-primary text-white px-3 py-2 hover:bg-teal-400 transition-all ease-in-out duration-500">
                                   Add More
                              </button>
                    </div>
                </div>

                <div class="flex items-center my-6">
                    <div class="w-1/3 pr-2">
                        <div class="w-full">
                            <label for="category-icon" class="text-sm block mb-2">Package Image</label>
                            <label class="border border-primary border-dashed p-4 rounded-2xl flex items-center justify-center w-full h-52 cursor-pointer">
                                <img  class="w-full h-full">
                                <div class="flex flex-col items-center justify-center gap-2">
                                    <Icon name="tabler:cloud-upload" class="text-primary text-5xl opacity-85" />
                                    <span class="text-primary font-semibold opacity-85 pl-6">Upload Package Icon</span>
                                </div>
                                <input id="category-icon" type="file" hidden>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-5">
                <Button class="my-3 bg-primary text-white px-3 py-2  hover:bg-teal-400 transition-all ease-in-out duration-500">
                    Save Package
                </Button>
            </div>
        </div>
    </AppLayout>
</template>

<style scoped>

</style>