
<template>
  <div>
    <ClientOnly>
<Vueform>
    <StaticElement
      name="title"
      tag="h1"
      content="To Do Form"
      description="A form to create a to-do list item"
    />
    <TextElement
      name="task_name"
      label="Task Name"
      placeholder="Enter task name"
    />
    <TextareaElement
      name="task_description"
      label="Task Description"
      placeholder="Enter task description"
    />
    <DateElement
      name="due_date"
      label="Due Date"
    />
    <RadiogroupElement
      name="priority"
      label="Priority"
      :items="[
        'High',
        'Medium',
        'Low',
      ]"
    />
    <CheckboxElement
      name="i_agree_to_the_terms_and_conditions"
      text="I accept the <a href=\&#39;#\&#39;>Terms and Conditions</a>."
      :rules="[
        'accepted',
      ]"
    />
    <ButtonElement
      name="submit"
      button-label="Submit"
      :submits="true"
      :full="true"
      align="center"
    />
  </Vueform>

    </ClientOnly>
  </div>
</template>