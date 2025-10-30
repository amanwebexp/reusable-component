"use client";
import CommonLayout from "@/components/CommanLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import CardComponent from "@/components/UiComponents/CardComponent";
import PopoverComponent, {
  popeoverCode,
  popoverComponentCall,
} from "@/components/UiComponents/PopoverComponent";
import TabsDemo from "@/components/UiComponents/TabsComponent";
import React from "react";
import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { toast } from "sonner";

/**
 * PopOver page component.
 * Displays a popover preview, code sample, and component call example,
 * with the option to copy code snippets or installation commands.
 */
const PopOver = () => {
  // State for popover open/close
  const [isOpen, setIsOpen] = useState(false);

  // States to manage copy button text for different sections
  const [copied, setCopied] = useState(false);
  const [codeCopi, setCodeCopy] = useState(false);
  // Command to install popover component
  const commandInstall = `npx shadcn@latest add popover`;
  const [checkboxCodeInstall, setCheckboxCodeInstall] = useState(false);

  /**
   * Copy Popover component source code to clipboard.
   */
  const handleCopy = async () => {
    await navigator.clipboard.writeText(popeoverCode);
    setCopied(true);
    toast.success("Copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  /**
   * Copy installation command to clipboard.
   */
  const handleCommandCode = async () => {
    await navigator.clipboard.writeText(commandInstall);
    setCheckboxCodeInstall(true);
    toast.success("Copied to clipboard!");
    setTimeout(() => setCheckboxCodeInstall(false), 2000);
  };

  /**
   * Copy Popover component usage example to clipboard.
   */
  const handleComponentCode = async () => {
    await navigator.clipboard.writeText(popoverComponentCall);
    setCodeCopy(true);
    toast.success("Copied to clipboard!");
    setTimeout(() => setCodeCopy(false), 2000);
  };

  // Popover configuration (trigger + content)
  const popoverItem = {
    popoverTrigger: (
      <Button variant="outline" onClick={() => setIsOpen(!isOpen)}>
        Open popover
      </Button>
    ),
    contentClass: "w-80",
    content: isOpen && (
      <div className="grid gap-4">
        <div className="space-y-2">
          <h4 className="leading-none font-medium">Dimensions</h4>
          <p className="text-muted-foreground text-sm">
            Set the dimensions for the layer.
          </p>
        </div>
        <div className="grid gap-2">
          <div className="grid grid-cols-3 items-center gap-4">
            <Label htmlFor="width">Width</Label>
            <Input id="width" defaultValue="100%" className="col-span-2 h-8" />
          </div>
          <div className="grid grid-cols-3 items-center gap-4">
            <Label htmlFor="maxWidth">Max. width</Label>
            <Input
              id="maxWidth"
              defaultValue="300px"
              className="col-span-2 h-8"
            />
          </div>
          <div className="grid grid-cols-3 items-center gap-4">
            <Label htmlFor="height">Height</Label>
            <Input id="height" defaultValue="25px" className="col-span-2 h-8" />
          </div>
          <div className="grid grid-cols-3 items-center gap-4">
            <Label htmlFor="maxHeight">Max. height</Label>
            <Input
              id="maxHeight"
              defaultValue="none"
              className="col-span-2 h-8"
            />
          </div>
        </div>
      </div>
    ),
  };

  // Tabs for Preview, Code, and Component Call
  const tabsItem = [
    {
      triggerTitle: "Preview",
      value: "preview",
      content: (
        <>
          {" "}
          <PopoverComponent item={popoverItem} />
        </>
      ),
    },
    {
      triggerTitle: "Code",
      value: "code",
      content: (
        <>
          {" "}
          <div className="relative">
            <Button
              onClick={handleCopy}
              className="absolute right-2 top-2 z-10"
              variant="outline"
              size="sm"
            >
              {copied ? "Copied!" : "Copy"}
            </Button>
            <SyntaxHighlighter language="javascript">
              {popeoverCode}
            </SyntaxHighlighter>
          </div>
        </>
      ),
    },
    {
      triggerTitle: "Component Call",
      content: (
        <>
          <div className="relative">
            <Button
              onClick={handleComponentCode}
              className="absolute right-2 top-2 z-10"
              variant="outline"
              size="sm"
            >
              {codeCopi ? "Copied!" : "Copy"}
            </Button>
            <SyntaxHighlighter language="javascript">
              {popoverComponentCall}
            </SyntaxHighlighter>
          </div>
        </>
      ),
    },
  ];

  // Card data with description, tabs, and extra command section
  const mainCard = {
    // title: "Tool Tip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    content: (
      <>
        <TabsDemo item={tabsItem} />
      </>
    ),
    extra: (
      <>
        Command
        <div className="relative items-center">
          <Button
            onClick={handleCommandCode}
            className="absolute right-2 top-1 z-10"
            variant="outline"
            size="sm"
          >
            {checkboxCodeInstall ? "Copied!" : "Copy"}
          </Button>
          <SyntaxHighlighter language="javascript">
            {commandInstall}
          </SyntaxHighlighter>
        </div>
      </>
    ),
  };
  return (
    <>
      <CommonLayout pageTitle={"Popover"} />
      <CardComponent item={mainCard} />
    </>
  );
};

export default PopOver;
