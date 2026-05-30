import { useEffect } from 'react'
import { getCalApi } from '@calcom/embed-react'

export default function ScheduleCall() {
  useEffect(() => {
    ;(async function () {
      const cal = await getCalApi({ namespace: 'webcustom' })
      cal('ui', { hideEventTypeDetails: false, layout: 'month_view' })
    })()
  }, [])

  return (
    <button
      data-cal-namespace="webcustom"
      data-cal-link="flavourlab-appresuelve/webcustom"
      data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
      className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-600 text-[--color-text-primary] font-semibold outline-4 outline-cyan-300/60 shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_10px_30px_rgba(59,130,246,0.35)] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
    >
      Agendar gratis
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 7l5 5m0 0l-5 5m5-5H6"
        />
      </svg>
    </button>
  )
}