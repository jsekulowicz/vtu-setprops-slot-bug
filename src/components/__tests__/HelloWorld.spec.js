import { describe, it, expect } from 'vitest'

import { mount, shallowMount } from '@vue/test-utils'
import HelloWorld from '../HelloWorld.vue'

describe('HelloWorld', () => {
  it('deletes shallow mounted slot element when setProps is called', async () => {
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg: 'Hello Vitest' },
      slots: { footer: "<div>Bye!</div>" }
    })
    expect(wrapper.vm.$slots.footer[0].elm).toBeTruthy()

    await wrapper.setProps({ msg: "Setting props will delete slot's element!" })
    expect(wrapper.vm.$slots.footer[0].elm).toBeFalsy()
  })

  it('deletes deep mounted slot element when setProps is called', async () => {
    const wrapper = mount(HelloWorld, {
      propsData: { msg: 'Hello Vitest' },
      slots: { footer: "<div>Bye!</div>" }
    })
    expect(wrapper.vm.$slots.footer[0].elm).toBeTruthy()

    await wrapper.setProps({ msg: "Setting props will delete slot's element!" })
    expect(wrapper.vm.$slots.footer[0].elm).toBeFalsy()
  })
})
