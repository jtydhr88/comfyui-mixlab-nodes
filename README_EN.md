![](https://img.shields.io/github/release/shadowcz007/comfyui-mixlab-nodes)

[中文](./README.md)

## Fork Maintenance Notice

The original project is no longer actively maintained. This fork is maintained by ComfyUI official developer [@jtydhr88](https://github.com/jtydhr88) to ensure compatibility with the current version of ComfyUI. Some redundant or broken features from the original have been removed. This fork is limited to compatibility fixes only — no new features will be added.

### Removed

- **TouchDesigner canvas background** (`td_background.js`) — Replaced the entire `drawBackCanvas` rendering pipeline with an outdated copy that cached `devicePixelRatio` at load time, causing node connections to become misaligned when moving the browser between monitors with different DPI scaling.
- **`centerOnNode` override** (`ui_mixlab.js`) — DPR fix that is now handled natively by ComfyUI.
- **Node badge rendering** (`ui_mixlab.js`) — Custom badge drawing via `onDrawForeground` override, now redundant as ComfyUI has built-in badge support.
- **Global `drop` listener** (`ui_mixlab.js`) — A `document`-level drop handler that unconditionally called `preventDefault()` / `stopPropagation()` and routed dropped JSON files only to mixlab's own app-format loader, completely breaking drag-and-drop of standard ComfyUI workflow JSON files.
- **mixlab App Builder feature** (`app_mixlab.js` file deleted, `ui_mixlab.js`) — Includes the `AppInfo` node frontend UI, the global `paste` listener + `loadAppJson`, the `get_my_app` API call, the "Workflow App" canvas context menu, the AppInfo highlighting in the node navigator panel, and the `VAEDecode → AppInfo` rule from `smart_connect.js`. This fork no longer supports packaging workflows into web apps.
- **LiteGraph prototype modifications** (`ui_mixlab.js`, `smart_connect.js` file deleted) — All removed: added methods `helpAboutNode` / `fixTheNode` / `text2text` / `image2text`; overrides of `getGroupMenuOptions` / `getNodeMenuOptions` / `getCanvasMenuOptions`; and smart-connect's `_createNodeForInput` / `_createNodeForOutput`. The corresponding right-click menu items (Help, Fix node v2, Text-to-Text, Clone Group, Save Group as Template, Remove Group & Nodes, Nodes Map, smart-connect arrows) are removed accordingly, reducing menu-injection conflicts with other plugins.

---

> Compatible with the latest ComfyUI, py3.11, torch 2.3.1+cu121
> [Mixlab nodes discord](https://discord.gg/cXs9vZSqeK)

For business cooperation, please contact email 389570357@qq.com

![Her Demo Page](assets/1725710761451.png)

##### `Latest`:

- Added [fal.ai](https://fal.ai/dashboard) video generation: Kling, RunwayGen3, LumaDreamMachine. [Download workflow](./workflow/video-all-in-one-test-workflow.json)

- Added SimulateDevDesignDiscussions. Requires [swarm](https://github.com/openai/swarm) and [Comfyui-ChatTTS](https://github.com/shadowcz007/Comfyui-ChatTTS). [Download workflow](./workflow/swarm制作的播客节点workflow.json)

- Added SenseVoice

- [Added JS-SDK for using ComfyUI directly in frontend projects](https://github.com/shadowcz007/comfyui-js-sdk)

- Added TextToImage Siliconflow API node for image generation using Siliconflow's flux

- [Added Her Demo page for digital human conversation](https://github.com/shadowcz007/ComfyUI-Backend-MixlabNodes/blob/main/workflow/her_demo_workflow.json)

- Right-click menu supports text-to-text for prompt completion, with cloud LLM or local LLM support.

- Added MiniCPM-V 2.6 int4

This is the int4 quantized version of MiniCPM-V 2.6.
Running with int4 version would use lower GPU memory (about 7GB).

- Mobile adaptation, modified Mask editor for app mode

- Added p5.js as input node
  [workflow](./workflow/p5workflow.json)
  [workflow2](./workflow/p5-video-workflow.json)

- App mode added batch prompt for composing and running dynamic prompts in bulk

![alt text](./assets/1722517810720.png)

- Added API Key Input node for managing LLM keys, optimized LLM-related nodes for future agent mode

- Added SiliconflowLLM for using free LLMs provided by Siliconflow

#### `Recommended Plugins`

[comfyui-liveportrait](https://github.com/shadowcz007/comfyui-liveportrait)

[Comfyui-ChatTTS](https://github.com/shadowcz007/Comfyui-ChatTTS)

[comfyui-sound-lab](https://github.com/shadowcz007/comfyui-sound-lab)

[comfyui-Image-reward](https://github.com/shadowcz007/comfyui-Image-reward)

[comfyui-ultralytics-yolo](https://github.com/shadowcz007/comfyui-ultralytics-yolo)

[comfyui-moondream](https://github.com/shadowcz007/comfyui-moondream)

## Workflow-to-APP

- Added AppInfo node to transform workflows into web apps with simple configuration.
- Support multiple web app switching.
- Published app workflows can be edited again via right-click.
- Web apps support category configuration, editable from ComfyUI's right-click menu.
- Support dynamic prompts.
- If the web app opens blank, check that the plugin directory is named `comfyui-mixlab-nodes` (ZIP downloads may add a `-main` suffix that needs to be removed).

![](./assets/微信图片_20240421205440.png)

![](./assets/0-m-app.png)

![](./assets/appinfo-readme.png)

![](./assets/appinfo-2.png)

Example:

- workflow
  ![APP info](./workflow/appinfo-workflow.svg)
  [text-to-image](./workflow/Text-to-Image-app.json)

APP-JSON:

- [text-to-image](./example/Text-to-Image_3.json)
- [image-to-image](./example/Image-to-Image_2.json)
- text-to-text

> Currently supports 9 node types as interface input nodes: Load Image, VHS_LoadVideo, CLIPTextEncode, PromptSlide, TextInput_, Color, FloatSlider, IntNumber, CheckpointLoaderSimple, LoraLoader

> Output nodes: PreviewImage, SaveImage, ShowTextForGPT, VHS_VideoCombine, PromptImage

> Unified seed input control, supports: SamplerCustom, KSampler

> Companion [Photoshop plugin](https://github.com/shadowcz007/comfyui-ps-plugin)

> If image upload fails, please check: for LAN or cloud services, use HTTPS on port 8189. (Thanks to @Damien for reporting the issue.)

## Real-time Design

> ScreenShareNode & FloatingVideoNode. Now ComfyUI supports capturing screen pixel streams from any software and can be used for LCM-Lora integration. Let's get started with implementation and design!

![screenshare](./assets/screenshare.png)

https://github.com/shadowcz007/comfyui-mixlab-nodes/assets/12645064/e7e77f90-e43e-410a-ab3a-1952b7b4e7da

[ScreenShareNode & FloatingVideoNode](./workflow/3-FloatVideo-workflow.json)

!! Please use the address with HTTPS (https://127.0.0.1).

### SpeechRecognition & SpeechSynthesis

![f](./assets/audio-workflow.svg)

[Voice + Real-time Face Swap Workflow](./workflow/语音+实时换脸workflow.json)

- Preview Audio

[text-to-audio](./workflow/text-to-audio-base-workflow.json)

### GPT

> Support for calling multiple GPTs. Local LLM, ChatGPT, ChatGLM3, ChatGLM4. Some code provided by rui. If you are using OpenAI's service, fill in https://api.openai.com/v1. If you are using a local LLM service, fill in http://127.0.0.1:xxxx/v1. Azure OpenAI: https://xxxx.openai.azure.com

[LLM_base_workflow](./workflow/LLM_base_workflow.json)

- SiliconflowLLM
- ChatGPTOpenAI

## Prompt

> PromptSlide
> ![](./assets/prompt_weight.png)

> randomPrompt

![randomPrompt](./assets/randomPrompt.png)

> ClipInterrogator

[add clip-interrogator](https://github.com/pharmapsychotic/clip-interrogator)

> PromptImage & PromptSimplification — Assist in simplifying prompt words, comparing images and prompt word nodes.

> ChinesePrompt && PromptGenerate — Chinese prompt node, write prompts directly in Chinese.

![](./assets/ChinesePrompt_workflow.svg)

### Layers

> A new layer class node has been added, allowing you to separate the image into layers. After merging the images, you can input the controlnet for further processing.

> The composite images node overlays a foreground image onto a background image at specified positions and scales, with optional blending modes and masking capabilities. position: 'overall', "center_center", "left_bottom", "center_bottom", "right_bottom", "left_top", "center_top", "right_top"

![layers](./assets/layers-workflow.svg)

![poster](./assets/poster-workflow.svg)

### 3D

![](./assets/3d-workflow.png)
![](./assets/3d_app.png)
[workflow](./assets/Image-to-3D_1.json)

![](./assets/3dimage.png)
[workflow](./workflow/3D-workflow.json)

### Image

#### LoadImagesToBatch

> Upload multiple images for batch input into the IP adapter.

#### LoadImagesFromLocal

> Monitor changes to images in a local folder, and trigger real-time execution of workflows, supporting common image formats, especially PSD format, in conjunction with Photoshop.

![watch](./assets/4-loadfromlocal-watcher-workflow.svg)

[workflow-4](./workflow/4-loadfromlocal-watcher-workflow.json)

#### LoadImagesFromURL

> Conveniently load images from a fixed address on the internet to ensure that default images in the workflow can be executed.

#### TextImage

> [Download fonts](https://drxie.github.io/OSFCC/) and place them in `custom_nodes/comfyui-mixlab-nodes/assets/fonts`

#### MiniCPM-VQA Simple

This is the int4 quantized version of MiniCPM-V 2.6.
Running with int4 version would use lower GPU memory (about 7GB).

[Model](https://huggingface.co/openbmb/MiniCPM-V-2_6-int4)

![alt text](assets/1724308322276.png)

### Style

> Apply VisualStyle Prompting, Modified from [ComfyUI_VisualStylePrompting](https://github.com/ExponentialML/ComfyUI_VisualStylePrompting)

![](./assets/VisualStylePrompting.png)

> StyleAligned, Modified from [style_aligned_comfy](https://github.com/brianfitzgerald/style_aligned_comfy)

### Utils

> The Color node provides a color picker for easy color selection, the Font node offers built-in font selection for use with TextImage to generate text images, and the DynamicDelayByText node allows delayed execution based on the length of the input text.

- [Added DynamicDelayByText, enabling delayed execution based on input text length.](./workflow/audio-chatgpt-workflow.json)

- [CkptNames compare the effects of different models.](./workflow/ckpts-image-workflow.json)

### Other Nodes

- Added Edit Mask for manual mask drawing during generation. [workflow](./workflow/edit-mask-workflow.json)

![main](./assets/all-workflow.svg)
![main2](./assets/detect-face-all.png)

[workflow-1](./workflow/1-workflow.json)

> TransparentImage

![TransparentImage](./assets/TransparentImage.png)

> FeatheredMask, SmoothMask

Add edges to an image.

![FeatheredMask](./assets/FlVou_Y6kaGWYoEj1Tn0aTd4AjMI.jpg)

> LaMaInpainting (manual installation required)

from [simple-lama-inpainting](https://github.com/enesmsahin/simple-lama-inpainting)

- [Issue tracker](https://github.com/shadowcz007/comfyui-mixlab-nodes/issues/294)

> rembgNode

"briarmbg", "u2net", "u2netp", "u2net_human_seg", "u2net_cloth_seg", "silueta", "isnet-general-use", "isnet-anime"

**briarmbg** model was developed by BRIA AI and can be used as an open-source model for non-commercial purposes.

### Enhancement

- Direct "Help" option accessible through node context menu.
- "Nodes Map" feature added to global context menu.
- An improvement has been made to directly redirect to GitHub to search for missing nodes when loading the graph.

![help](./assets/help.png)

![node-not-found](./assets/node-not-found.png)

- Right-click shortcut

The right-click menu supports text-to-text conversion, facilitating prompt word completion, and supports cloud LLMs or local LLMs.

Local LLM API example: `http://localhost:1234/v1`

![alt text](./assets/1724380841822.png)

### Models

- [Download TripoSR](https://huggingface.co/stabilityai/TripoSR/blob/main/model.ckpt) and place it in `models/triposr`

- [Download facebook/dino-vitb16](https://huggingface.co/facebook/dino-vitb16/tree/main) and place it in `models/triposr/facebook/dino-vitb16`

[Download rembg Models](https://github.com/danielgatis/rembg/tree/main#Models), move to: `models/rembg`

[Download lama](https://github.com/enesmsahin/simple-lama-inpainting/releases/download/v0.1.0/big-lama.pt), move to: `models/lama`

[Download Salesforce/blip-image-captioning-base](https://huggingface.co/Salesforce/blip-image-captioning-base), move to: `models/clip_interrogator/Salesforce/blip-image-captioning-base`

[Download succinctly/text2image-prompt-generator](https://huggingface.co/succinctly/text2image-prompt-generator/tree/main), move to: `models/prompt_generator/text2image-prompt-generator`

[Download Helsinki-NLP/opus-mt-zh-en](https://huggingface.co/Helsinki-NLP/opus-mt-zh-en/tree/main), move to: `models/prompt_generator/opus-mt-zh-en`

## Installation

Manually install by cloning the repo into the custom_nodes directory:

```
cd ComfyUI/custom_nodes

git clone https://github.com/shadowcz007/comfyui-mixlab-nodes.git
```

Install the requirements:

Run directly:

```
cd ComfyUI/custom_nodes/comfyui-mixlab-nodes
install.bat
```

Or install using:

```
../../../python_embeded/python.exe -s -m pip install -r requirements.txt
```

If you are using a venv, make sure you have it activated before installation and use:

```
pip3 install -r requirements.txt
```

#### Discussions

[discussions](https://github.com/shadowcz007/comfyui-mixlab-nodes/discussions)

<picture>
  <source
    media="(prefers-color-scheme: dark)"
    srcset="
      https://api.star-history.com/svg?repos=shadowcz007/comfyui-mixlab-nodes&type=Date&theme=dark
    "
  />
  <source
    media="(prefers-color-scheme: light)"
    srcset="
      https://api.star-history.com/svg?repos=shadowcz007/comfyui-mixlab-nodes&type=Date
    "
  />
  <img
    alt="Star History Chart"
    src="https://api.star-history.com/svg?repos=shadowcz007/comfyui-mixlab-nodes&type=Date"
  />
</picture>
