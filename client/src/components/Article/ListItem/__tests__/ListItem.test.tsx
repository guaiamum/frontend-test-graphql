import { fireEvent, render } from '@testing-library/react';
import ListItem from '../index';

const mock = {
    article: { title: 'title', urlToImage: '', description: '' }
}

describe('ListItem Component', () => {
    it('calls clickhandler correclty according to upper state', () => {
        const clickHandler = jest.fn();

        const { getByText, rerender } = render(
            <ListItem {...mock} clickHandler={clickHandler} isCurrentSelected={false} />
        )

        fireEvent.click(getByText('title'))
        expect(clickHandler).toHaveBeenCalledWith('title')

        rerender(
            <ListItem {...mock} clickHandler={clickHandler} isCurrentSelected={true} />
        )

        fireEvent.click(getByText('title'))
        expect(clickHandler).toHaveBeenCalledTimes(1) // should not been called after rerender
    })
})