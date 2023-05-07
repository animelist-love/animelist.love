import { c as create_ssr_component, h as add_attribute, v as validate_component, e as escape, f as each } from './index2-5765a0e9.js';
import { a as convertToUrl } from './index4-37fe8b6c.js';
import { I as Image } from './Image-813c3f07.js';
import { D as Dot } from './Dot-4c5dd641.js';

const CharacterCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { source } = $$props;
  if ($$props.source === void 0 && $$bindings.source && source !== void 0)
    $$bindings.source(source);
  return `<div class="w-full flex flex-wrap rounded-lg bg-neutral-500/20 p-4">
  <div class="flex justify-between w-full gap-4"><a class="w-full"${add_attribute("href", `/${source.node.type.toLowerCase()}/details/${convertToUrl(source.node.title.userPreferred)}-an${source.node.id}`, 0)}><div class="flex gap-4"><div class="w-16 rounded-lg shrink-0 overflow-hidden"><div class="aspect-w-11 aspect-h-16">${validate_component(Image, "Image").$$render(
    $$result,
    {
      src: source.node.coverImage.large,
      backgroundColor: source.node.coverImage.color
    },
    {},
    {}
  )}</div></div>
        <div class="w-full flex flex-col gap-1.5"><h3 class="font-bold font-lexenddeca line-clamp-2">${escape(source.node.title.userPreferred)}</h3>
          <div class="flex text-xs items-center gap-2"><span class="lowercase first-letter:uppercase">${escape(source.characterRole)}</span> <span class="first-letter:uppercase">(Role)</span>
            ${validate_component(Dot, "Dot").$$render(
    $$result,
    {
      backgroundColor: source.node.coverImage.color
    },
    {},
    {}
  )}
            <span>${escape(source.node.format)}</span></div></div></div></a>
    <div class="flex items-center"><button class="text-neutral-400"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="w-6 h-6 fill-current"><path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path></svg></button></div></div>
  
  ${source.voiceActorRoles.length ? `<div class="flex w-full flex-col items-center gap-4 mt-4 pt-4 border-t border-neutral-500/10"><div class="flex flex-wrap justify-evenly gap-x-4 gap-y-2.5">${each(source.voiceActorRoles, (voiceActorRole) => {
    return `<a${add_attribute("href", `/staff/${convertToUrl(voiceActorRole.voiceActor?.name?.userPreferred)}-an${voiceActorRole.voiceActor?.id}`, 0)}><div class="flex flex-col gap-1 items-center"><div class="w-10 h-10 rounded-full overflow-hidden">${validate_component(Image, "Image").$$render(
      $$result,
      {
        src: voiceActorRole.voiceActor.image.medium
      },
      {},
      {}
    )}</div>
              <h3 class="text-xs">${voiceActorRole.roleNotes ? `(${escape(voiceActorRole.roleNotes)})
                ` : ``}${escape(voiceActorRole.voiceActor.name.userPreferred)}</h3>
              <span class="text-xs text-neutral-400">${escape(voiceActorRole.voiceActor.languageV2)}</span></div>
          </a>`;
  })}</div></div>` : ``}</div>`;
});

export { CharacterCard as C };
//# sourceMappingURL=CharacterCard-28743863.js.map
