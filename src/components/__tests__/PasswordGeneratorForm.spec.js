import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import PasswordGeneratorForm from '../PasswordGeneratorForm.vue'

describe('PasswordGeneratorForm', () => {
  it('renders properly', () => {
    const wrapper = mount(PasswordGeneratorForm)
    expect(wrapper.text()).toContain('There will be form.')
  })
})
