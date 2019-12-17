import { create } from 'react-test-renderer';
import React, {Suspense} from 'react';
const Dialog = React.lazy(() => import('./DialogsContainer'));

describe('CustomComponent', () => {
    it('rendered lazily', async()=> {
        const root = create(
            <Suspense fallback={<div>loading...</div>}>
        <Dialog/>
        </Suspense>
    );

        await Dialog;
        expect(root).toMatchSnapshot();
    })
});