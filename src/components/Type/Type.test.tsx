import { render, screen } from '@testing-library/react'
import { test, expect } from 'vitest'
import { Type } from './Type'

test("renders Type component", async () => {
    render(<Type name="normal" />)
    expect(screen.getByText("normal")).toBeInTheDocument()
})

test("renders data-type properly", async () => {
    render(<Type name="normal" />)
    expect(screen.getByTestId("typebutton")).toHaveAttribute("data-type", "normal")
})