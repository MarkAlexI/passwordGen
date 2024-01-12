import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import GeneratedPasswordDisplay from '../GeneratedPasswordDisplay.vue'

describe('GeneratedPasswordDisplay', () => {
  it('renders properly', () => {
    const wrapper = mount(GeneratedPasswordDisplay)
    expect(wrapper.text()).toContain('There will be result.')
  })
})
