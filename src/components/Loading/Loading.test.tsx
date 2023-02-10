import { render, screen } from '@testing-library/react'
import { test, expect } from 'vitest'
import { Loading } from './Loading'

test("renders Loading component", async () => {
    render(<Loading />)
    expect(screen.getByText("Loading...")).toBeInTheDocument()
})

