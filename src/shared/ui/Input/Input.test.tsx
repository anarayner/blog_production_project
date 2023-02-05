import { fireEvent, render, screen } from '@testing-library/react';
import { Input } from '@/shared/ui/Input';

describe('Input', () => {
    test('test render', () => {
        render(<Input placeholder="test" />);
        expect(screen.getByPlaceholderText('test')).toBeInTheDocument();
    });
    test('test render2', () => {
        render(<Input placeholder="test" />);
        const input = screen.getByPlaceholderText('test');
        fireEvent.change(input, { target: { value: 'test value' } });
        // @ts-ignore
        expect(input.value).toBe('test value');
        screen.debug();
    });
    test('test readonly', () => {
        render(<Input placeholder="test" />);
        expect(screen.getByPlaceholderText('test')).toHaveClass('input');
    });
});
