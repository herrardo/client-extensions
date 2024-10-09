
/**
 * SPDX-FileCopyrightText: (c) 2000 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */
// Custom plugin for adding the current date
CKEDITOR.plugins.add('insertDate', {
    init: function (editor) {
        if (!editor.getCommand('insertDateCommand')) {
            editor.addCommand('insertDateCommand', {
                exec: function (editor) {
                    const currentDate = new Date().toLocaleDateString();
                    editor.insertText(currentDate);
                },
            });
        }
        if (!editor.ui.get('InsertDate')) {
            // Add the button that triggers the 'insertDateCommand'
            editor.ui.addButton('InsertDate', {
                label: 'Insert Current Date',
                command: 'insertDateCommand',
                toolbar: 'basicstyles',
                icon: '/o/adaptive-media/image/240458/Preview-1000x0/tree.png',
            });
        }
    },
});
const editorConfigTransformer = (config) => {
    // CKEditor
    const toolbar = config.toolbar;
    const buttonName = 'InsertDate';
    let transformedConfig;
    if (typeof toolbar === 'string') {
        const activeToolbar = config[`toolbar_${toolbar}`];
        activeToolbar.push([buttonName]);
        console.log("toolbar 1");
        transformedConfig = {
            ...config,
            [`toolbar_${toolbar}`]: activeToolbar,
        };
    }
    else if (Array.isArray(toolbar)) {
        console.log("toolbar 2");
        toolbar.push([buttonName]);
        transformedConfig = {
            ...config,
            toolbar,
        };
    }
    const extraPlugins = config.extraPlugins;
    return {
        ...transformedConfig,
        extraPlugins: extraPlugins ? `${extraPlugins},insertDate` : 'insertDate',
    };
};
const editorTransformer = {
    editorConfigTransformer,
};
export default editorTransformer;
