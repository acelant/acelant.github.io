$(function() {
    "use strict";

    var metadataLoader = new ThemeBuilder.MetadataLoader(),
        historyChangesManager = new ThemeBuilder.HistoryChangesManager(window.sessionStorage),
        previewIframeNotifier = new ThemeBuilder.PreviewIframeNotifier();

    function listener(event) {
        try {
            var data = JSON.parse(event.data);
            switch(data.action) {
                case "getCSS":
                    ThemeBuilder.viewModel.showCSSPopup(data.actionData);
                    break;
                case "saveCSS":
                    ThemeBuilder.viewModel.saveCSSAs(data.actionData);
                    break;
                case "stylesUpdated":
                    ThemeBuilder.viewModel.toolboxValueUpdated(data.actionData.compiledMetadata, data.actionData.modifyVars);
                    break;
                case "handleError":
                    DevExpress.ui.dialog.alert(data.actionData.message, "Compilation error");
                    break;
            }
        } catch (error) { }
    }

    if(window.addEventListener)
        window.addEventListener("message", listener, false);
    else
        window.attachEvent("onmessage", listener);

    ThemeBuilder.themes = [
        { themeId: 1, name: "generic", colorScheme: "light", text: "Light", group: "Generic" },
        { themeId: 2, name: "generic", colorScheme: "dark", text: "Dark", group: "Generic" },
        { themeId: 13, name: "generic", colorScheme: "carmine", text: "Carmine", group: "Generic" },
        { themeId: 14, name: "generic", colorScheme: "darkmoon", text: "Dark Moon", group: "Generic" },
        { themeId: 15, name: "generic", colorScheme: "softblue", text: "Soft Blue", group: "Generic" },
        { themeId: 16, name: "generic", colorScheme: "darkviolet", text: "Dark Violet", group: "Generic" },
        { themeId: 17, name: "generic", colorScheme: "greenmist", text: "Green Mist", group: "Generic" },
        { themeId: 9, name: "generic", colorScheme: "light-compact", text: "Light", group: "Generic Compact" },
        { themeId: 10, name: "generic", colorScheme: "dark-compact", text: "Dark", group: "Generic Compact" },
        { themeId: 18, name: "generic", colorScheme: "carmine-compact", text: "Carmine", group: "Generic Compact" },
        { themeId: 19, name: "generic", colorScheme: "darkmoon-compact", text: "Dark Moon", group: "Generic Compact" },
        { themeId: 20, name: "generic", colorScheme: "softblue-compact", text: "Soft Blue", group: "Generic Compact" },
        { themeId: 21, name: "generic", colorScheme: "darkviolet-compact", text: "Dark Violet", group: "Generic Compact" },
        { themeId: 22, name: "generic", colorScheme: "greenmist-compact", text: "Green Mist", group: "Generic Compact" },
        { themeId: 23, name: "material", colorScheme: "blue-light", text: "Blue Light", group: "Material Design" },
        { themeId: 24, name: "material", colorScheme: "orange-light", text: "Orange Light", group: "Material Design" },
        { themeId: 25, name: "material", colorScheme: "lime-light", text: "Lime Light", group: "Material Design" },
        { themeId: 26, name: "material", colorScheme: "purple-light", text: "Purple Light", group: "Material Design" },
        { themeId: 27, name: "material", colorScheme: "teal-light", text: "Teal Light", group: "Material Design" },
        { themeId: 3, name: "ios7", colorScheme: "default", text: "iOS", group: "Mobile" }
    ];

    ThemeBuilder.groupsAliasesRepository = new ThemeBuilder.GroupsAliasesRepository();
    ThemeBuilder.metadataRepository = new ThemeBuilder.MetadataRepository(metadataLoader);
    ThemeBuilder.metadataVersion = ThemeBuilder.__get_metadata_version();
    ThemeBuilder.viewModel = new ThemeBuilder.ViewModel(ThemeBuilder.metadataRepository, historyChangesManager, previewIframeNotifier, { beautify: css_beautify });
    ThemeBuilder.navigationTree = new ThemeBuilder.NavigationTree({
        rootItemClick: $.proxy(ThemeBuilder.viewModel.treeRootItemClick, ThemeBuilder.viewModel),
        childItemClick: $.proxy(ThemeBuilder.viewModel.treeItemClick, ThemeBuilder.viewModel)
    });
    ThemeBuilder.navigationTreeManager = new ThemeBuilder.NavigationTreeManager(ThemeBuilder.navigationTree, ThemeBuilder.viewModel, ThemeBuilder.metadataRepository);

    ThemeBuilder.viewModel.init(ThemeBuilder.themes);

    ko.applyBindings(ThemeBuilder.viewModel);
});
