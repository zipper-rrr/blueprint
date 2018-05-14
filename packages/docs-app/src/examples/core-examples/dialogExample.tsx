/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */

import * as React from "react";

import { AnchorButton, Button, Classes, Dialog, Intent, Tooltip } from "@blueprintjs/core";
import { OverlayExample } from "./overlayExample";

export class DialogExample extends OverlayExample {
    protected renderExample() {
        return (
            <>
                <Button onClick={this.handleOpen}>Show dialog</Button>
                <Dialog
                    className={this.props.themeName}
                    icon="info-sign"
                    onClose={this.handleClose}
                    title="Palantir Foundry"
                    {...this.state}
                >
                    <div className={Classes.DIALOG_BODY}>
                        <p>
                            <strong>
                                Data integration is the seminal problem of the digital age. For over ten years, we’ve
                                helped the world’s premier organizations rise to the challenge.
                            </strong>
                        </p>
                        <p>
                            Palantir Foundry radically reimagines the way enterprises interact with data by amplifying
                            and extending the power of data integration. With Foundry, anyone can source, fuse, and
                            transform data into any shape they desire. Business analysts become data engineers — and
                            leaders in their organization’s data revolution.
                        </p>
                        <p>
                            Foundry’s back end includes a suite of best-in-class data integration capabilities: data
                            provenance, git-style versioning semantics, granular access controls, branching,
                            transformation authoring, and more. But these powers are not limited to the back-end IT
                            shop.
                        </p>
                        <p>
                            In Foundry, tables, applications, reports, presentations, and spreadsheets operate as data
                            integrations in their own right. Access controls, transformation logic, and data quality
                            flow from original data source to intermediate analysis to presentation in real time. Every
                            end product created in Foundry becomes a new data source that other users can build upon.
                            And the enterprise data foundation goes where the business drives it.
                        </p>
                        <p>Start the revolution. Unleash the power of data integration with Palantir Foundry.</p>
                    </div>
                    <div className={Classes.DIALOG_FOOTER}>
                        <div className={Classes.DIALOG_FOOTER_ACTIONS}>
                            <Tooltip content="This button is hooked up to close the dialog.">
                                <Button onClick={this.handleClose}>Close</Button>
                            </Tooltip>
                            <AnchorButton
                                intent={Intent.PRIMARY}
                                href="https://www.palantir.com/palantir-foundry/"
                                target="_blank"
                            >
                                Visit the Foundry website
                            </AnchorButton>
                        </div>
                    </div>
                </Dialog>
            </>
        );
    }

    protected renderOptions() {
        const options = super.renderOptions();
        // delete "hasBackdrop" switch from option controls
        options[0].splice(-1, 1);
        return options;
    }
}
