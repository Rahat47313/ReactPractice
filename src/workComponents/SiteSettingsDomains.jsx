import { HiDotsHorizontal } from "react-icons/hi";
import Optimized from "../assets/images/Optimized.svg";

export default function SiteSettingsDomains() {
  return (
    <div className="flex flex-col gap-[30px]">
      <div className="text-white text-[12px] bg-[#111111] rounded-md w-[720px]">
        <div className="px-[30px]">
          <div className="flex justify-between py-[30px] border-b border-[#252525]">
            <div className="font-bold text-[22px]">Base Domain</div>
            <div className="flex items-center gap-[7px]">
              <div>Optimized</div>
              <div>
                <img src={Optimized} />
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-[50px] p-[30px]">
          {/**col 1 */}
          <div className="flex flex-col justify-between text-[#AAAAAA]">
            <div>URL</div>
            {/**parent */}
            <div className="flex flex-col gap-7">
              <div>Status</div>
              <div>Version</div>
            </div>
          </div>

          {/* col 2 */}
          <div className="flex flex-col gap-7 w-full">
            <div className="flex flex-col gap-3">
              <div className="flex justify-between">
                <a
                  href="https://sparkly-hand-223414.webspark.app"
                  className="font-semibold text-[#0099FF]"
                >
                  https://sparkly-hand-223414.webspark.app
                </a>
              </div>
            </div>
            <div>Website is published and optimized</div>
            <div>
              <span className="font-semibold text-[#0099FF]">Latest</span> ·
              Updated 4mo ago by Fardin shek
            </div>
          </div>
        </div>
      </div>

      <div className="text-white text-[12px] bg-[#111111] rounded-md w-[720px]">
        <div className="px-[30px]">
          <div className="flex justify-between py-[30px] border-b border-[#252525]">
            <div className="font-bold text-[22px]">Custom Domain</div>
            <div className="flex items-center gap-[7px]">
              <div>Optimized</div>
              <div>
                <img src={Optimized} />
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-[50px] p-[30px]">
          {/**col 1 */}
          <div className="flex flex-col justify-between text-[#AAAAAA]">
            <div>URL</div>
            {/**parent */}
            <div className="flex flex-col gap-7">
              <div>Status</div>
              <div>Version</div>
            </div>
          </div>

          {/* col 2 */}
          <div className="flex flex-col gap-7 w-full">
            <div className="flex flex-col gap-3">
              <div className="flex justify-between">
                <a
                  href="https://mocdt.com"
                  className="font-semibold text-[#0099FF]"
                >
                  https://mocdt.com
                </a>
                <button className="flex justify-center items-center text-[#AAAAAA] text-[12px] w-[30px]">
                  <HiDotsHorizontal />
                </button>
              </div>
              <div className="text-[#999999]">
                Connect a new custom domain by removing the above
              </div>
            </div>
            <div>Website is published and optimized</div>
            <div>
              <span className="font-semibold text-[#0099FF]">Latest</span> ·
              Updated 4mo ago by Fardin shek
            </div>
          </div>
        </div>
      </div>

      <div className="text-white text-[12px] bg-[#111111] rounded-md w-[720px]">
        <div className="p-[30px]">
          <div className="flex items-center gap-[10px] mb-[30px]">
            <div className="font-bold text-[22px]">Canonical URL</div>
            <div className="font-bold text-[10px] text-[#0099FF] bg-[#0099FF26] rounded-md px-[4px] py-[3px]">UPGRADE</div>
          </div>
          <p className="text-[#AAAAAA]">
              Set up a Canonical URL when using a Reverse Proxy for your site to
              specify the URL for search engines to index and avoid serving
              duplicate content. The use of a reverse proxy is only allowed on
              Enterprise plans or if you’ve purchased an Add-On.<a href="#" className="font-semibold text-[#0099FF]"> Learn more</a>
            </p>
        </div>
      </div>
    </div>
  );
}