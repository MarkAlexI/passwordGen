import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import GeneratedPasswordDisplay from '../GeneratedPasswordDisplay.vue'

/*describe('GeneratedPasswordDisplay', () => {
  it('renders properly', () => {
    const wrapper = mount(GeneratedPasswordDisplay)
    expect(wrapper.text()).toContain('Generated Password:Copy!')
  })
})*/
describe('GeneratedPasswordDisplay', () => {
  it('renders properly', () => {
    const generatedPassword = 'TestPassword123'
    const wrapper = mount(GeneratedPasswordDisplay, {
      props: {
        generatedPassword: generatedPassword
      }
    })

    expect(wrapper.exists()).toBe(true)
    expect(wrapper.text()).toContain('Generated Password:')
    expect(wrapper.text()).toContain(generatedPassword)
    expect(wrapper.find('.copy-btn').exists()).toBe(true)
  })
})

