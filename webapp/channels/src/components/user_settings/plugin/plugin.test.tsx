// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {screen} from '@testing-library/react';
import {shallow} from 'enzyme';
import type {ComponentProps} from 'react';
import React from 'react';

import {renderWithContext} from 'tests/react_testing_utils';

import PluginTab from './plugin';

type Props = ComponentProps<typeof PluginTab>;

const baseProps: Props = {
    activeSection: '',
    closeModal: jest.fn(),
    collapseModal: jest.fn(),
    settings: {
        id: 'pluginA',
        action: {
            text: 'actionText',
            buttonText: 'buttonText',
            onClick: jest.fn(),
            title: 'actionTitle',
        },
        sections: [
            {
                settings: [
                    {
                        default: '0',
                        name: '0',
                        options: [
                            {
                                text: 'Option 0',
                                value: '0',
                            },
                            {
                                text: 'Option 1',
                                value: '1',
                            },
                        ],
                        type: 'radio',
                    },
                ],
                title: 'section 1',
                onSubmit: jest.fn(),
            },
            {
                settings: [
                    {
                        default: '1',
                        name: '1',
                        options: [
                            {
                                text: 'Option 0',
                                value: '0',
                            },
                            {
                                text: 'Option 1',
                                value: '1',
                            },
                        ],
                        type: 'radio',
                    },
                ],
                title: 'section 2',
                onSubmit: jest.fn(),
            },
        ],
        uiName: 'plugin A',
    },
    updateSection: jest.fn(),
};

describe('plugin tab', () => {
    it('all props are properly passed to the children', () => {
        const wrapper = shallow(<PluginTab {...baseProps}/>);
        expect(wrapper).toMatchSnapshot();
    });

    it('setting name is properly set', () => {
        renderWithContext(<PluginTab {...baseProps}/>);
        expect(screen.queryAllByText('plugin A Settings')).toHaveLength(2);
    });
});
