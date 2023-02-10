import jest from "jest-mock"
import { render, screen } from '@testing-library/react'
import { test, expect } from 'vitest'
import { BackHeader } from './BackHeader'

test("renders BackHeader component", async () => {
    render(<BackHeader onBack={() => { }} />)
    expect(screen.getByText("Go back")).toBeInTheDocument()
})

test("renders onBack properly", async () => {
    const onBack = jest.fn()
    render(<BackHeader onBack={onBack} />)
    expect(screen.getByText("Go back")).toBeInTheDocument()
    expect(onBack).not.toHaveBeenCalled()
    screen.getByText("Go back").click()
    expect(onBack).toHaveBeenCalled()
})
