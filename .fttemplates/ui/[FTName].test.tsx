import { render, screen } from '@testing-library/react';
import { <FTName>, <FTName>Theme } from '.<FTName>';

describe('<FTName>', () => {
    test('<FTName> render', () => {
        render(<FTName>TEST<FTName>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });

    test('<FTName> theme primary', () => {
        render(<<FTName>>TEST</<FTName>>);
        expect(screen.getByText('TEST')).toHaveClass('primary'); 
    });
});
