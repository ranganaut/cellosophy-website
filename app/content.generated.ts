// Generated from the Obsidian-compatible content vault by scripts/generate-content.mjs.
export type ContentValue = string | number | boolean | string[];
export type CanvasNode = { id: string; type: string; x?: number; y?: number; width?: number; height?: number; text?: string; file?: string; url?: string; color?: string; label?: string; subpath?: string };
export type CanvasEdge = { id: string; fromNode: string; toNode: string; fromSide?: string; toSide?: string; label?: string };
export type CanvasDocument = { nodes?: CanvasNode[]; edges?: CanvasEdge[] };
export type ContentNote = { id: string; path: string; data: Record<string, ContentValue>; body: string; paragraphs: string[]; canvas?: CanvasDocument };
export const contentNotes: ContentNote[] = [
  {
    "id": "about/better-ai",
    "path": "site/about/better-ai.md",
    "data": {
      "id": "about/better-ai",
      "type": "about-card",
      "publish": true,
      "number": 3,
      "heading": "Better artificial intelligence"
    },
    "body": "By learning how living systems adapt and solve problems without brains, we hope to imagine AI that is more flexible, resourceful, and responsive to its world.",
    "paragraphs": [
      "By learning how living systems adapt and solve problems without brains, we hope to imagine AI that is more flexible, resourceful, and responsive to its world."
    ]
  },
  {
    "id": "about/lives-of-cells",
    "path": "site/about/lives-of-cells.md",
    "data": {
      "id": "about/lives-of-cells",
      "type": "about-card",
      "publish": true,
      "number": 2,
      "heading": "The lives of cells"
    },
    "body": "Unicellular creatures are not merely machinery. They are active beings navigating uncertain worlds—and they may hold clues to the beginnings of mind and life.",
    "paragraphs": [
      "Unicellular creatures are not merely machinery. They are active beings navigating uncertain worlds—and they may hold clues to the beginnings of mind and life."
    ]
  },
  {
    "id": "about/origins-of-mind",
    "path": "site/about/origins-of-mind.md",
    "data": {
      "id": "about/origins-of-mind",
      "type": "about-card",
      "publish": true,
      "number": 1,
      "heading": "Origins of mind"
    },
    "body": "We want to understand how sensing, memory, choice, and agency could arise before brains and nervous systems.",
    "paragraphs": [
      "We want to understand how sensing, memory, choice, and agency could arise before brains and nervous systems."
    ]
  },
  {
    "id": "navigation/follow-or-join",
    "path": "site/navigation/follow-or-join.md",
    "data": {
      "id": "navigation/follow-or-join",
      "type": "navigation",
      "publish": true,
      "label": "Follow or join",
      "href": "#subscribe",
      "order": 5,
      "cta": true
    },
    "body": "",
    "paragraphs": []
  },
  {
    "id": "navigation/notes",
    "path": "site/navigation/notes.md",
    "data": {
      "id": "navigation/notes",
      "type": "navigation",
      "publish": true,
      "label": "Notes",
      "href": "/notes",
      "order": 3
    },
    "body": "",
    "paragraphs": []
  },
  {
    "id": "navigation/vision",
    "path": "site/navigation/vision.md",
    "data": {
      "id": "navigation/vision",
      "type": "navigation",
      "publish": true,
      "label": "Vision",
      "href": "#vision",
      "order": 2
    },
    "body": "",
    "paragraphs": []
  },
  {
    "id": "navigation/who-we-are",
    "path": "site/navigation/who-we-are.md",
    "data": {
      "id": "navigation/who-we-are",
      "type": "navigation",
      "publish": true,
      "label": "Who we are",
      "href": "#about",
      "order": 4
    },
    "body": "",
    "paragraphs": []
  },
  {
    "id": "navigation/why-cellosophy",
    "path": "site/navigation/why-cellosophy.md",
    "data": {
      "id": "navigation/why-cellosophy",
      "type": "navigation",
      "publish": true,
      "label": "Why Cellosophy",
      "href": "#idea",
      "order": 1
    },
    "body": "",
    "paragraphs": []
  },
  {
    "id": "notes/biological-agency",
    "path": "notes/biological-agency.md",
    "data": {
      "id": "notes/biological-agency",
      "type": "note",
      "kind": "concept",
      "publish": true,
      "title": "Biological agency",
      "description": "A working concept for understanding how living systems regulate themselves and act in a changing world.",
      "tags": [
        "concept",
        "agency",
        "philosophy"
      ],
      "aliases": [
        "Agency in living systems"
      ]
    },
    "body": "# Biological agency\n\nIn their insightful article that claims it's [cognition all the way down](https://aeon.co/essays/how-to-understand-cells-tissues-and-organisms-as-agents-with-agendas), Levin and Dennett say: \n\n>Biology’s next great horizon is to understand cells, tissues and organisms as agents with agendas (even if unthinking ones)\n\nSo what is a biological agency? While we can't define our way to biological understanding (agents live in the real world, not in a textbook), definitions help us look in the right direction. Here's a recent, influential definition [^1]: \n\n\"the capacity of living systems at various levels to participate in their own development, maintenance, and function by regulating their structures and activities in response to conditions they encounter.\"\n\nor more succinctly, biological agency is the capacity of organisms to participate in their continued existence under precarious conditions. Note that there's a hint of circularity in the definition of agency, since \"participate\" has many of the connotations of agency, and if we try to define \"participate,\" we might end up going back to agency in some form. But the definition is a pointer, and it's pointing towards the fact that living beings are actively modulating their environments in order to flourish and replicate. \n\nWhy is this so important? Because _agency_ is to Cognitive Biology, including unicellular cognition, that _mind_ is to cognitive science, i.e., the central topic of investigation and arguably, the next great horizon of all of biology. Towards the beginning of his famous book \"What is Life[^2],\" Schrodinger states the aim of his investigation: \n\n\"I propose to develop first what you might call ‘a naive physicist’s ideas about organisms’, that is, the ideas which might arise in the mind of a physicist who, after having learnt his physics and, more especially, the statistical foundation of his science, begins to think about organisms and about the way they behave and function and who comes to ask himself conscientiously whether he, from what he has learnt, from the point of view of his comparatively simple and clear and humble science, can make any relevant contributions to the question.\"\n\nNow replace physics by cognitive science and statistics by information, and we might be able to restate Schrodinger so: \n\n\"I propose to develop first what you might call ‘a naive cognitive scientist's ideas about organisms’, that is, the ideas which might arise in the mind of a cognitive scientist who, after having learnt his cognitive science and, more especially, the informational and computational foundation of his science, begins to think about organisms and about the way they behave and function and who comes to ask himself conscientiously whether he, from what he has learnt, from the point of view of his comparatively simple and clear and humble science, can make any relevant contributions to the question.\"\n\nSchrodinger was prescient in pointing out that the unit of heredity was likely an aperiodic crystal, which it turned out to be: DNA! We can't yet make such bold claims yet, but we can point to agency as the object of our cognitive investigations. \n\n[^1]: Sultan, S., Moczek, A., & Walsh, D. (2022). Bridging the explanatory gaps: What can we learn from a biological agency perspective? BioEssays, 44(1), 2100185.\n\n[^2]: Schrödinger, E. (1992). What is life?: With mind and matter and autobiographical sketches. Cambridge university press.",
    "paragraphs": [
      "# Biological agency",
      "In their insightful article that claims it's [cognition all the way down](https://aeon.co/essays/how-to-understand-cells-tissues-and-organisms-as-agents-with-agendas), Levin and Dennett say:",
      ">Biology’s next great horizon is to understand cells, tissues and organisms as agents with agendas (even if unthinking ones)",
      "So what is a biological agency? While we can't define our way to biological understanding (agents live in the real world, not in a textbook), definitions help us look in the right direction. Here's a recent, influential definition [^1]:",
      "\"the capacity of living systems at various levels to participate in their own development, maintenance, and function by regulating their structures and activities in response to conditions they encounter.\"",
      "or more succinctly, biological agency is the capacity of organisms to participate in their continued existence under precarious conditions. Note that there's a hint of circularity in the definition of agency, since \"participate\" has many of the connotations of agency, and if we try to define \"participate,\" we might end up going back to agency in some form. But the definition is a pointer, and it's pointing towards the fact that living beings are actively modulating their environments in order to flourish and replicate.",
      "Why is this so important? Because _agency_ is to Cognitive Biology, including unicellular cognition, that _mind_ is to cognitive science, i.e., the central topic of investigation and arguably, the next great horizon of all of biology. Towards the beginning of his famous book \"What is Life[^2],\" Schrodinger states the aim of his investigation:",
      "\"I propose to develop first what you might call ‘a naive physicist’s ideas about organisms’, that is, the ideas which might arise in the mind of a physicist who, after having learnt his physics and, more especially, the statistical foundation of his science, begins to think about organisms and about the way they behave and function and who comes to ask himself conscientiously whether he, from what he has learnt, from the point of view of his comparatively simple and clear and humble science, can make any relevant contributions to the question.\"",
      "Now replace physics by cognitive science and statistics by information, and we might be able to restate Schrodinger so:",
      "\"I propose to develop first what you might call ‘a naive cognitive scientist's ideas about organisms’, that is, the ideas which might arise in the mind of a cognitive scientist who, after having learnt his cognitive science and, more especially, the informational and computational foundation of his science, begins to think about organisms and about the way they behave and function and who comes to ask himself conscientiously whether he, from what he has learnt, from the point of view of his comparatively simple and clear and humble science, can make any relevant contributions to the question.\"",
      "Schrodinger was prescient in pointing out that the unit of heredity was likely an aperiodic crystal, which it turned out to be: DNA! We can't yet make such bold claims yet, but we can point to agency as the object of our cognitive investigations.",
      "[^1]: Sultan, S., Moczek, A., & Walsh, D. (2022). Bridging the explanatory gaps: What can we learn from a biological agency perspective? BioEssays, 44(1), 2100185.",
      "[^2]: Schrödinger, E. (1992). What is life?: With mind and matter and autobiographical sketches. Cambridge university press."
    ]
  },
  {
    "id": "notes/chemotaxis",
    "path": "notes/chemotaxis.md",
    "data": {
      "id": "notes/chemotaxis",
      "type": "note",
      "kind": "concept",
      "publish": true,
      "title": "Chemotaxis",
      "description": "A flagship model for studying sensing, memory-like adaptation, valuation, and action in a single cell.",
      "tags": [
        "concept",
        "biology",
        "cognition"
      ],
      "aliases": [
        "Bacterial chemotaxis"
      ]
    },
    "body": "# Chemotaxis\n\nChemotaxis is the movement of an organism in response to chemical signals. In *E. coli*, receptors detect changes in the environment, signaling networks integrate those changes, and the flagellar motor turns the result into movement.\n\n---\n\n\nCan a cell think? Until recently, that question would have been brushed away or rejected out of hand. Cognition was viewed as the province of brains, neurons, and complex synaptic networks. Not anymore; researchers across microbiology, biophysics, and philosophy are increasingly converging on the framework of ['basal cognition'](https://en.wikipedia.org/wiki/Basal_cognition) - the notion that sensing, information processing, memory, and decision-making [are fundamental properties of life itself](https://pmc.ncbi.nlm.nih.gov/articles/PMC4396460/), extending all the way down to the humble microbe. \n\nGreat, but how do we actually study unicellular cognition?\n\nWouldn't it be good to have a model system that serves as a lens into a really complex domain such as unicellular cognition. A model system that's already been well studied, where there's tons of experimental data - even if it wasn't collected for the purpose of studying unicellular cognition - and where new studies are relatively tractable.\n\nAs it so turns out, there is such a model system, which is [bacterial chemotaxis](https://en.wikipedia.org/wiki/Chemotaxis#Bacterial_chemotaxis). In fact, [e. coli](https://en.wikipedia.org/wiki/Escherichia_coli) being ‘the [most studied model organism ever](https://pmc.ncbi.nlm.nih.gov/articles/PMC3989901/)’means there's tons of data that we can build upon and experimental methods that are also well understood. BTW, it's not as if people haven't thought about e. coli as a model system for studying intelligence. One of the pioneers of chemotaxis studies, [Daniel Koshland](https://en.wikipedia.org/wiki/Daniel_Koshland_Jr.), wrote a book in 1980 called \"Bacterial Chemotaxis as a Model Behavioral System,\" which is to say that in 1980 some people were already thinking bacterial chemotaxis is a model system for studying behavior and for connecting behavioral studies with mechanistic understanding. \n\nForward-thinking researchers like Koshland and the eminent biophysicist [Howard Berg](https://en.wikipedia.org/wiki/Howard_Berg) were already recognizing that a bacterium actively exploring its environment is not merely a passive biochemical vessel. It is an active agent navigating a complex, noisy world dominated by viscous forces. Berg’s legendary three-dimensional tracking experiments demonstrated that these tiny navigators evaluate their surroundings temporally, deciding whether life is getting better or worse. To view these organisms merely as rigid, pre-programmed automatons entirely misses the profound elegance of their sensorimotor coordination.\n\n> One might wonder what Koshland’s book would look like if it were written today. \n\nFor one, cognitive scientists and AI scientists/engineers aren't stuck in the old symbolic paradigm that made them look down on anyone studying bacteria as even remotely cognitive systems. And we have tons more data, and new approaches to synthetic biology that might make it plausible to study artificial cellular behavior at the same microscale that we study natural bacterial motion. We are now capable of tracking fluorescently tagged proteins as they spontaneously organize into highly ordered sensory arrays at the cellular poles. Synthetic biologists are even using engineered multicellular consortia to program Pavlovian-like associative learning circuits right into the bacterial genome, proving that the ancient hardware of life is deeply programmable. The cognitive cell is no longer a fringe metaphor relegated to the realms of philosophy; it is a measurable, highly dynamic reality that continually redefines our understanding of biological computation.\n\nThe flip side of all this information is that there's too much of it, and it's not clear how one should understand the monumental stack of experimental and theoretical discoveries related to chemotaxis (let alone other aspects of e. coli biology). The theoretical literature on Chemotaxis has become [a dense thicket of biophysics, non-equilibrium thermodynamics, and information theory](https://pmc.ncbi.nlm.nih.gov/articles/PMC4955840/). We now have sophisticated mathematical models detailing exactly how much free energy it costs a bacterium to maintain a high-sensitivity chemical memory, and equations quantifying the bits of information an [E. coli](https://en.wikipedia.org/wiki/Escherichia_coli) can extract from its surroundings. Recent interdisciplinary studies even debate whether bacterial chemosensing accuracy is fundamentally limited by the physical, stochastic arrival of molecules at the receptor—a rigid boundary defined by the laws of physics - or if the limitation lies within the energetic costs of the cell's own internal processing machinery.\n\n![](https://bdefzwcumgzjwllsnaej.supabase.co/storage/v1/object/public/minilink-user-assets/019fce55-bbf8-799f-a3e0-0dd504d65f14)\n\nOne path through the unicellular jungle: chemotaxis offers interesting analyses at many different scales. There is the scale of the flagellar motor itself, the smallest unit of bacterial motion, which can be understood purely as a mechanical process. We understand the genetic pathways that encode for the flagellar motor and how ion flow (either Protons or Sodium) powers the flagellar motor. This motor spans only 45 nanometers in diameter yet contains a membrane-embedded stator complex (comprised of MotA and MotB proteins) and a rotor (the C-ring) that operate together like exquisitely intermeshed gearwheels. Pumping ions across the membrane drives this rotary engine, spinning a helical propeller at speeds upwards of 100 revolutions per second. Remarkably, this motor is not a static piece of hardware. It dynamically adapts to the cell's internal signaling states by physically adding or removing torque-generating stator units and switch-complex proteins on the fly, continually optimizing its sensitivity to the physical environment. \n\n> [Here's a recent article](https://semble.so/url?id=https://www.quantamagazine.org/what-physical-life-force-turns-biologys-wheels-20260420/) about the flagellar motor.\n\nOne level up from the flagellar motor is the sensing-acting complex that goes from sensing chemical attractants and repellents by the bacterial cell membrane to choosing whether the flagella should turn counter-clockwise (which makes the bacterium swim forward in a straight line) or clockwise (which makes the bacterium tumble) - this is a whole organism problem which potentially offers a rich vein of cognitive analysis. Because a bacterium is physically too small to detect spatial differences in chemical concentration across its own microscopic body length, it must rely on a reliable form of short-term memory. It compares the concentration of nutrients it experiences in the present moment with the concentration it experienced a few seconds prior. This critical temporal comparison is mediated by a highly sophisticated internal network. Transmembrane methyl-accepting chemotaxis proteins (MCPs) cluster at the cell poles, acting like incredibly sensitive biological antennas. These networked arrays bind to environmental ligands and communicate directly with an intracellular histidine kinase called CheA. If the bacterium is swimming up a favorable gradient, kinase activity is suppressed, the flagellar motors remain in their default counter-clockwise state, and the cell continues its smooth forward run. If conditions deteriorate, the kinase phosphorylates a response regulator protein, CheY, which diffuses rapidly to the base of the flagellar motor, flipping the mechanical switch to a clockwise rotation and causing the cell to randomly reorient.\n\nThe true cognitive brilliance of this system, however, lies in how the cell continually resets its sensory baseline. Through the slow addition and removal of methyl groups on the receptor complex, catalyzed by the specialized adaptation enzymes CheR and CheB, the bacterium averages past environmental states. This ‘methylation state’ provides the system with integral feedback control, so that the bacterium is desensitized to the background level of a chemical, and instead, only detects the difference between the current level and the background level. \n\nFrom there, we can go into even higher scale questions of several kinds. Let's mention two. The first is studying how chemotaxis (and the genetic pathways that code for it) is embedded in the larger cell cycle. After all, a bacterium moves to places where it can access higher concentrations of nutrients so that it can then reproduce, right?\n\n> How is motility related to the cell cycle? \n\nMicrobiologists and systems biologists have indeed begun to untangle this question, viewing it through the lens of optimal resource allocation. Motility is highly energetically expensive. It demands massive investments of cellular resources to synthesize the dozens of different proteins required to build flagella, and it constantly drains the cell's proton motive force to keep those propellers spinning. Consequently, E. coli do not swim aimlessly if they do not have to. When cells find themselves in a nutrient-rich paradise, they rapidly suppress the expression of flagellar genes and pour their resources entirely into the massive ribosomal machinery required for rapid growth and cellular division. \n\nWhy run when you can feast? \n\nHowever, as a population grows and local nutrients inevitably become depleted, the bacteria upregulate their flagellar genes, synthesize motors, and actively seek out new metabolic opportunities. Out-migration is a thing, even for bacteria. \n\nIt's also the case that Chemotaxis is an example of a two component system that has widespread use in many other aspects of bacterial and multicellular biology. What's the relationship between the other problems solved by two-component systems and the problems solved in order for Chemotaxis to happen? Are there continuities in problem space we don't know about yet? Beyond chemotaxis, two-component systems dictate how bacteria communicate with one another through [quorum sensing](https://pubmed.ncbi.nlm.nih.gov/12086599/), how they decide to enter a dormant spore state in times of extreme stress, and how they successfully navigate host immune systems during an infection. They represent a universal molecular grammar of cellular decision-making.\n\nBy looking closely at the specific evolutionary modifications that have been made to the two-component system in chemotaxis, such as the integration of a dedicated, time-delayed memory module to allow for temporal tracking, we might begin to decipher the broader, underlying rules of basal cognition. Do other two-component systems in nature utilize similar hidden memory loops to anticipate environmental changes before they happen? Could these homologous, information-processing molecular circuits be the foundational biological building blocks that eventually scaled up, over billions of years of evolution, into the complex synaptic plasticity we see in eukaryotic nervous systems?\n\nBacterial chemotaxis gives us a front-row seat to the origins of mind, providing a tractable model system where chemistry, physics, and cognition seamlessly intertwine. It forces us to subject deep questions about the nature of intelligence and mind to experimental scrutiny, and with any luck, those experimental tools will help us answer the questions too.",
    "paragraphs": [
      "# Chemotaxis",
      "Chemotaxis is the movement of an organism in response to chemical signals. In *E. coli*, receptors detect changes in the environment, signaling networks integrate those changes, and the flagellar motor turns the result into movement.",
      "---",
      "Can a cell think? Until recently, that question would have been brushed away or rejected out of hand. Cognition was viewed as the province of brains, neurons, and complex synaptic networks. Not anymore; researchers across microbiology, biophysics, and philosophy are increasingly converging on the framework of ['basal cognition'](https://en.wikipedia.org/wiki/Basal_cognition) - the notion that sensing, information processing, memory, and decision-making [are fundamental properties of life itself](https://pmc.ncbi.nlm.nih.gov/articles/PMC4396460/), extending all the way down to the humble microbe.",
      "Great, but how do we actually study unicellular cognition?",
      "Wouldn't it be good to have a model system that serves as a lens into a really complex domain such as unicellular cognition. A model system that's already been well studied, where there's tons of experimental data - even if it wasn't collected for the purpose of studying unicellular cognition - and where new studies are relatively tractable.",
      "As it so turns out, there is such a model system, which is [bacterial chemotaxis](https://en.wikipedia.org/wiki/Chemotaxis#Bacterial_chemotaxis). In fact, [e. coli](https://en.wikipedia.org/wiki/Escherichia_coli) being ‘the [most studied model organism ever](https://pmc.ncbi.nlm.nih.gov/articles/PMC3989901/)’means there's tons of data that we can build upon and experimental methods that are also well understood. BTW, it's not as if people haven't thought about e. coli as a model system for studying intelligence. One of the pioneers of chemotaxis studies, [Daniel Koshland](https://en.wikipedia.org/wiki/Daniel_Koshland_Jr.), wrote a book in 1980 called \"Bacterial Chemotaxis as a Model Behavioral System,\" which is to say that in 1980 some people were already thinking bacterial chemotaxis is a model system for studying behavior and for connecting behavioral studies with mechanistic understanding.",
      "Forward-thinking researchers like Koshland and the eminent biophysicist [Howard Berg](https://en.wikipedia.org/wiki/Howard_Berg) were already recognizing that a bacterium actively exploring its environment is not merely a passive biochemical vessel. It is an active agent navigating a complex, noisy world dominated by viscous forces. Berg’s legendary three-dimensional tracking experiments demonstrated that these tiny navigators evaluate their surroundings temporally, deciding whether life is getting better or worse. To view these organisms merely as rigid, pre-programmed automatons entirely misses the profound elegance of their sensorimotor coordination.",
      "> One might wonder what Koshland’s book would look like if it were written today.",
      "For one, cognitive scientists and AI scientists/engineers aren't stuck in the old symbolic paradigm that made them look down on anyone studying bacteria as even remotely cognitive systems. And we have tons more data, and new approaches to synthetic biology that might make it plausible to study artificial cellular behavior at the same microscale that we study natural bacterial motion. We are now capable of tracking fluorescently tagged proteins as they spontaneously organize into highly ordered sensory arrays at the cellular poles. Synthetic biologists are even using engineered multicellular consortia to program Pavlovian-like associative learning circuits right into the bacterial genome, proving that the ancient hardware of life is deeply programmable. The cognitive cell is no longer a fringe metaphor relegated to the realms of philosophy; it is a measurable, highly dynamic reality that continually redefines our understanding of biological computation.",
      "The flip side of all this information is that there's too much of it, and it's not clear how one should understand the monumental stack of experimental and theoretical discoveries related to chemotaxis (let alone other aspects of e. coli biology). The theoretical literature on Chemotaxis has become [a dense thicket of biophysics, non-equilibrium thermodynamics, and information theory](https://pmc.ncbi.nlm.nih.gov/articles/PMC4955840/). We now have sophisticated mathematical models detailing exactly how much free energy it costs a bacterium to maintain a high-sensitivity chemical memory, and equations quantifying the bits of information an [E. coli](https://en.wikipedia.org/wiki/Escherichia_coli) can extract from its surroundings. Recent interdisciplinary studies even debate whether bacterial chemosensing accuracy is fundamentally limited by the physical, stochastic arrival of molecules at the receptor—a rigid boundary defined by the laws of physics - or if the limitation lies within the energetic costs of the cell's own internal processing machinery.",
      "![](https://bdefzwcumgzjwllsnaej.supabase.co/storage/v1/object/public/minilink-user-assets/019fce55-bbf8-799f-a3e0-0dd504d65f14)",
      "One path through the unicellular jungle: chemotaxis offers interesting analyses at many different scales. There is the scale of the flagellar motor itself, the smallest unit of bacterial motion, which can be understood purely as a mechanical process. We understand the genetic pathways that encode for the flagellar motor and how ion flow (either Protons or Sodium) powers the flagellar motor. This motor spans only 45 nanometers in diameter yet contains a membrane-embedded stator complex (comprised of MotA and MotB proteins) and a rotor (the C-ring) that operate together like exquisitely intermeshed gearwheels. Pumping ions across the membrane drives this rotary engine, spinning a helical propeller at speeds upwards of 100 revolutions per second. Remarkably, this motor is not a static piece of hardware. It dynamically adapts to the cell's internal signaling states by physically adding or removing torque-generating stator units and switch-complex proteins on the fly, continually optimizing its sensitivity to the physical environment.",
      "> [Here's a recent article](https://semble.so/url?id=https://www.quantamagazine.org/what-physical-life-force-turns-biologys-wheels-20260420/) about the flagellar motor.",
      "One level up from the flagellar motor is the sensing-acting complex that goes from sensing chemical attractants and repellents by the bacterial cell membrane to choosing whether the flagella should turn counter-clockwise (which makes the bacterium swim forward in a straight line) or clockwise (which makes the bacterium tumble) - this is a whole organism problem which potentially offers a rich vein of cognitive analysis. Because a bacterium is physically too small to detect spatial differences in chemical concentration across its own microscopic body length, it must rely on a reliable form of short-term memory. It compares the concentration of nutrients it experiences in the present moment with the concentration it experienced a few seconds prior. This critical temporal comparison is mediated by a highly sophisticated internal network. Transmembrane methyl-accepting chemotaxis proteins (MCPs) cluster at the cell poles, acting like incredibly sensitive biological antennas. These networked arrays bind to environmental ligands and communicate directly with an intracellular histidine kinase called CheA. If the bacterium is swimming up a favorable gradient, kinase activity is suppressed, the flagellar motors remain in their default counter-clockwise state, and the cell continues its smooth forward run. If conditions deteriorate, the kinase phosphorylates a response regulator protein, CheY, which diffuses rapidly to the base of the flagellar motor, flipping the mechanical switch to a clockwise rotation and causing the cell to randomly reorient.",
      "The true cognitive brilliance of this system, however, lies in how the cell continually resets its sensory baseline. Through the slow addition and removal of methyl groups on the receptor complex, catalyzed by the specialized adaptation enzymes CheR and CheB, the bacterium averages past environmental states. This ‘methylation state’ provides the system with integral feedback control, so that the bacterium is desensitized to the background level of a chemical, and instead, only detects the difference between the current level and the background level.",
      "From there, we can go into even higher scale questions of several kinds. Let's mention two. The first is studying how chemotaxis (and the genetic pathways that code for it) is embedded in the larger cell cycle. After all, a bacterium moves to places where it can access higher concentrations of nutrients so that it can then reproduce, right?",
      "> How is motility related to the cell cycle?",
      "Microbiologists and systems biologists have indeed begun to untangle this question, viewing it through the lens of optimal resource allocation. Motility is highly energetically expensive. It demands massive investments of cellular resources to synthesize the dozens of different proteins required to build flagella, and it constantly drains the cell's proton motive force to keep those propellers spinning. Consequently, E. coli do not swim aimlessly if they do not have to. When cells find themselves in a nutrient-rich paradise, they rapidly suppress the expression of flagellar genes and pour their resources entirely into the massive ribosomal machinery required for rapid growth and cellular division.",
      "Why run when you can feast?",
      "However, as a population grows and local nutrients inevitably become depleted, the bacteria upregulate their flagellar genes, synthesize motors, and actively seek out new metabolic opportunities. Out-migration is a thing, even for bacteria.",
      "It's also the case that Chemotaxis is an example of a two component system that has widespread use in many other aspects of bacterial and multicellular biology. What's the relationship between the other problems solved by two-component systems and the problems solved in order for Chemotaxis to happen? Are there continuities in problem space we don't know about yet? Beyond chemotaxis, two-component systems dictate how bacteria communicate with one another through [quorum sensing](https://pubmed.ncbi.nlm.nih.gov/12086599/), how they decide to enter a dormant spore state in times of extreme stress, and how they successfully navigate host immune systems during an infection. They represent a universal molecular grammar of cellular decision-making.",
      "By looking closely at the specific evolutionary modifications that have been made to the two-component system in chemotaxis, such as the integration of a dedicated, time-delayed memory module to allow for temporal tracking, we might begin to decipher the broader, underlying rules of basal cognition. Do other two-component systems in nature utilize similar hidden memory loops to anticipate environmental changes before they happen? Could these homologous, information-processing molecular circuits be the foundational biological building blocks that eventually scaled up, over billions of years of evolution, into the complex synaptic plasticity we see in eukaryotic nervous systems?",
      "Bacterial chemotaxis gives us a front-row seat to the origins of mind, providing a tractable model system where chemistry, physics, and cognition seamlessly intertwine. It forces us to subject deep questions about the nature of intelligence and mind to experimental scrutiny, and with any luck, those experimental tools will help us answer the questions too."
    ]
  },
  {
    "id": "notes/index",
    "path": "notes/index.md",
    "data": {
      "id": "notes/index",
      "type": "note",
      "kind": "index",
      "publish": true,
      "title": "The Cellosophy Notes",
      "description": "An evolving public notebook for the study of cognition, agency, and intelligence in living cells.",
      "tags": [
        "index",
        "cellosophy"
      ]
    },
    "body": "# The Cellosophy Notes\n\nThis is the public notebook of CELLosophy: an evolving record of questions, conversations, readings, experiments, and concepts gathered around cognition in living systems.\n\nThe notes may become a **Journal Club**, a library of cleaned-up **conversation transcripts**, an interconnected map of concepts such as [[Chemotaxis]] and [[biological-agency]], and eventually, a **textbook**. The structure is intentionally open. Follow a link, browse a tag, or start anywhere that catches your attention.",
    "paragraphs": [
      "# The Cellosophy Notes",
      "This is the public notebook of CELLosophy: an evolving record of questions, conversations, readings, experiments, and concepts gathered around cognition in living systems.",
      "The notes may become a **Journal Club**, a library of cleaned-up **conversation transcripts**, an interconnected map of concepts such as [[Chemotaxis]] and [[biological-agency]], and eventually, a **textbook**. The structure is intentionally open. Follow a link, browse a tag, or start anywhere that catches your attention."
    ]
  },
  {
    "id": "organism/bacteria",
    "path": "organisms/bacteria.md",
    "data": {
      "id": "organism/bacteria",
      "type": "organism",
      "publish": true,
      "key": "bacteria",
      "name": "Bacteria",
      "kicker": "Sense",
      "label": "Bacteria",
      "order": 1
    },
    "body": "A bacterium can read chemical gradients and continually revise where it swims—without a neuron in sight.",
    "paragraphs": [
      "A bacterium can read chemical gradients and continually revise where it swims—without a neuron in sight."
    ]
  },
  {
    "id": "organism/physarum",
    "path": "organisms/physarum.md",
    "data": {
      "id": "organism/physarum",
      "type": "organism",
      "publish": true,
      "key": "physarum",
      "name": "Physarum",
      "kicker": "Remember",
      "label": "Physarum",
      "order": 3
    },
    "body": "A brainless slime mold can solve spatial problems and retain traces of where it has already been.",
    "paragraphs": [
      "A brainless slime mold can solve spatial problems and retain traces of where it has already been."
    ]
  },
  {
    "id": "organism/stentor-roeseli",
    "path": "organisms/stentor-roeseli.md",
    "data": {
      "id": "organism/stentor-roeseli",
      "type": "organism",
      "publish": true,
      "key": "stentor",
      "name": "Stentor roeseli",
      "kicker": "Choose",
      "label": "Stentor roeseli",
      "order": 2
    },
    "body": "This single cell tries different responses to irritation, changing tactics when the first one fails.",
    "paragraphs": [
      "This single cell tries different responses to irritation, changing tactics when the first one fails."
    ]
  },
  {
    "id": "README",
    "path": "README.md",
    "data": {
      "publish": false
    },
    "body": "# CELLosophy content vault\n\nThis folder is the editorial source for the CELLosophy website. Open `content/` as an Obsidian vault.\n\nThe site build reads published Markdown notes from this vault. Site layout, styling, and interaction remain in the application code outside this folder.\n\n## Publishing\n\nNotes are private by default. A note is published only when its frontmatter explicitly contains `publish: true`.\n\n```yaml\n---\npublish: true\n---\n```\n\nLeaving out `publish` has the same effect as `publish: false`.\n\nEdit the notes, commit the changes to GitHub, and the Cloudflare build will regenerate the site content.",
    "paragraphs": [
      "# CELLosophy content vault",
      "This folder is the editorial source for the CELLosophy website. Open `content/` as an Obsidian vault.",
      "The site build reads published Markdown notes from this vault. Site layout, styling, and interaction remain in the application code outside this folder.",
      "## Publishing",
      "Notes are private by default. A note is published only when its frontmatter explicitly contains `publish: true`.",
      "```yaml\n---\npublish: true\n---\n```",
      "Leaving out `publish` has the same effect as `publish: false`.",
      "Edit the notes, commit the changes to GitHub, and the Cloudflare build will regenerate the site content."
    ]
  },
  {
    "id": "site/about",
    "path": "site/about.md",
    "data": {
      "id": "site/about",
      "type": "section",
      "publish": true,
      "number": 3,
      "label": "Who we are",
      "heading": "Different disciplines. One pursuit."
    },
    "body": "CELLosophy brings together cognitive scientists, computer scientists, microbiologists, and mathematicians to think across the usual boundaries between life, mind, and intelligence.",
    "paragraphs": [
      "CELLosophy brings together cognitive scientists, computer scientists, microbiologists, and mathematicians to think across the usual boundaries between life, mind, and intelligence."
    ]
  },
  {
    "id": "site/footer",
    "path": "site/footer.md",
    "data": {
      "id": "site/footer",
      "type": "footer",
      "publish": true,
      "wordmark": "CELLosophy",
      "tagline": "Cognitive science · Computer science · Microbiology · Mathematics",
      "backLabel": "Back to the cell ↑"
    },
    "body": "",
    "paragraphs": []
  },
  {
    "id": "site/header",
    "path": "site/header.md",
    "data": {
      "id": "site/header",
      "type": "site",
      "publish": true,
      "wordmark": "CELLosophy",
      "homeLabel": "CELLosophy home",
      "navigationLabel": "Main navigation"
    },
    "body": "The site header contains the wordmark and the primary navigation. Navigation items live in `site/navigation/` so they can be reordered independently.",
    "paragraphs": [
      "The site header contains the wordmark and the primary navigation. Navigation items live in `site/navigation/` so they can be reordered independently."
    ]
  },
  {
    "id": "site/hero",
    "path": "site/hero.md",
    "data": {
      "id": "site/hero",
      "type": "hero",
      "publish": true,
      "eyebrow": "An inquiry into microbial cognition",
      "headline": "Do minds really need brains?",
      "primaryLabel": "Why CELLosophy",
      "primaryHref": "#idea",
      "primaryArrow": "→",
      "notesLabel": "Read the Notes",
      "notesHref": "/notes",
      "notesArrow": "↗",
      "secondaryLabel": "Subscribe to our Substack",
      "secondaryHref": "#subscribe",
      "secondaryArrow": "↘",
      "manifesto": "Cells sense · choose · adapt",
      "context": "A collaboration among cognitive scientists, computer scientists, microbiologists, and mathematicians.",
      "imageAlt": "Hand-drawn bacteria, Stentor roeseli, and Physarum",
      "fieldLabel": "A field notebook of cellular intelligence"
    },
    "body": "We are exploring how living cells sense, decide, remember, and act - and what their intelligence might teach us about building better AI.",
    "paragraphs": [
      "We are exploring how living cells sense, decide, remember, and act - and what their intelligence might teach us about building better AI."
    ]
  },
  {
    "id": "site/metadata",
    "path": "site/metadata.md",
    "data": {
      "id": "site/metadata",
      "type": "metadata",
      "publish": true,
      "title": "Cellosophy",
      "description": "A cross-disciplinary inquiry into minds without brains—and what cellular intelligence can teach us about better AI.",
      "socialTitle": "Cellosophy — Minds Without Brains",
      "socialDescription": "A cross-disciplinary inquiry into minds without brains—and what cellular intelligence can teach us about better AI.",
      "socialAlt": "Cellosophy — Do minds really need brains?"
    },
    "body": "",
    "paragraphs": []
  },
  {
    "id": "site/subscribe",
    "path": "site/subscribe.md",
    "data": {
      "id": "site/subscribe",
      "type": "section",
      "publish": true,
      "number": 4,
      "label": "Follow or join",
      "heading": "Come along for the inquiry.",
      "embedTitle": "Subscribe to Cellosophy on Substack",
      "embedNote": "Follow the journey. Join the conversation. Perhaps help shape what comes next."
    },
    "body": "Subscribe to our Substack for essays, observations, experiments, and conversations as CELLosophy takes shape. If these questions meet your own work, reply to a note and introduce yourself—we would be delighted to hear from potential collaborators.",
    "paragraphs": [
      "Subscribe to our Substack for essays, observations, experiments, and conversations as CELLosophy takes shape. If these questions meet your own work, reply to a note and introduce yourself—we would be delighted to hear from potential collaborators."
    ]
  },
  {
    "id": "site/vision",
    "path": "site/vision.md",
    "data": {
      "id": "site/vision",
      "type": "section",
      "publish": true,
      "number": 2,
      "label": "Vision",
      "heading": "The Essence of CELLosophy"
    },
    "body": "CELLosophy is an inquiry into cognition that begins with the living cell. Its central question - do you need a brain to have a mind?-opens a bottom-up investigation of how autonomous organisms sense, evaluate, remember, regulate, and act in changing environments.\n\nWe treat cognition broadly and carefully. Neither do we claim that bacteria think like humans, nor that every biological process is intelligent. Instead, we ask what kinds of problem-solving, agency, and meaning-making are already present in the basic work of staying alive.\n\nBacterial chemotaxis, especially in E. coli, offers a flagship example: receptors detect change, signaling networks integrate information, methylation provides a memory-like baseline, and flagellar motors turn valuation into movement.\n\nWe are exploring the connection between these concrete biochemical mechanisms and larger debates on basal cognition, enactivism, cybernetics, biosemiotics, and embodied intelligence. By its very nature, CELLosophy is both a research program and a public commons for curious minds; one that brings rigorous science, imaginative questions, and collaborative discovery together.",
    "paragraphs": [
      "CELLosophy is an inquiry into cognition that begins with the living cell. Its central question - do you need a brain to have a mind?-opens a bottom-up investigation of how autonomous organisms sense, evaluate, remember, regulate, and act in changing environments.",
      "We treat cognition broadly and carefully. Neither do we claim that bacteria think like humans, nor that every biological process is intelligent. Instead, we ask what kinds of problem-solving, agency, and meaning-making are already present in the basic work of staying alive.",
      "Bacterial chemotaxis, especially in E. coli, offers a flagship example: receptors detect change, signaling networks integrate information, methylation provides a memory-like baseline, and flagellar motors turn valuation into movement.",
      "We are exploring the connection between these concrete biochemical mechanisms and larger debates on basal cognition, enactivism, cybernetics, biosemiotics, and embodied intelligence. By its very nature, CELLosophy is both a research program and a public commons for curious minds; one that brings rigorous science, imaginative questions, and collaborative discovery together."
    ]
  },
  {
    "id": "site/why-cellosophy",
    "path": "site/why-cellosophy.md",
    "data": {
      "id": "site/why-cellosophy",
      "type": "section",
      "publish": true,
      "number": 1,
      "label": "Why Cellosophy",
      "heading": "Mind may not begin with the brain.",
      "quote": "“Not little humans in little cells—but life solving the problem of what to do next.”"
    },
    "body": "We tend to treat brains as the birthplace of perception, memory, and action. But living cells were sensing their surroundings, evaluating possibilities, and changing course eons before neurons appeared. Cellosophy asks whether these capacities are merely the machinery beneath mind, or its earliest forms.",
    "paragraphs": [
      "We tend to treat brains as the birthplace of perception, memory, and action. But living cells were sensing their surroundings, evaluating possibilities, and changing course eons before neurons appeared. Cellosophy asks whether these capacities are merely the machinery beneath mind, or its earliest forms."
    ]
  }
];
