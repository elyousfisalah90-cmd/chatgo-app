"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, XCircle, Clock, AlertTriangle, Copy, ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"

export default function DomainCheckPage() {
  const [domain, setDomain] = useState("")
  const [checking, setChecking] = useState(false)
  const [results, setResults] = useState<any>(null)

  const checkDomain = async () => {
    if (!domain) return
    
    setChecking(true)
    
    // Simulate domain check
    setTimeout(() => {
      setResults({
        dns: Math.random() > 0.5,
        ssl: Math.random() > 0.5,
        vercel: Math.random() > 0.5,
        propagation: Math.random() * 100
      })
      setChecking(false)
    }, 2000)
  }

  const commonIssues = [
    {
      title: "DNS لم ينتشر بعد",
      description: "يحتاج من 10 دقائق إلى 48 ساعة",
      solution: "انتظر قليلاً ثم جرب مرة أخرى"
    },
    {
      title: "سجلات DNS خاطئة",
      description: "تأكد من إضافة A Record و CNAME بشكل صحيح",
      solution: "راجع الإعدادات في Namecheap"
    },
    {
      title: "الدومين غير مضاف في Vercel",
      description: "يجب إضافة الدومين في إعدادات المشروع",
      solution: "اذهب إلى Settings > Domains في Vercel"
    },
    {
      title: "كاش المتصفح",
      description: "المتصفح يخزن النسخة القديمة",
      solution: "اضغط Ctrl+Shift+R أو Cmd+Shift+R"
    }
  ]

  const dnsRecords = [
    { type: "A Record", host: "@", value: "76.76.21.21", ttl: "Automatic" },
    { type: "CNAME", host: "www", value: "cname.vercel-dns.com", ttl: "Automatic" }
  ]

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold">فحص حالة الدومين</h1>
          <p className="text-muted-foreground">
            تحقق من حالة الدومين وحل المشاكل
          </p>
        </div>

        {/* Domain Input */}
        <Card>
          <CardHeader>
            <CardTitle>أدخل اسم الدومين</CardTitle>
            <CardDescription>اكتب الدومين الخاص بك للتحقق من حالته</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-2">
              <Input
                placeholder="مثال: chatgo.com"
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
                className="flex-1"
              />
              <Button onClick={checkDomain} disabled={checking || !domain}>
                {checking ? "جاري الفحص..." : "فحص"}
              </Button>
            </div>

            {results && (
              <div className="space-y-3 pt-4 border-t">
                <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                  <span className="font-medium">سجلات DNS</span>
                  {results.dns ? (
                    <div className="flex items-center gap-2 text-green-600">
                      <CheckCircle2 size={20} />
                      <span>صحيح</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 text-red-600">
                      <XCircle size={20} />
                      <span>خطأ</span>
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                  <span className="font-medium">شهادة SSL</span>
                  {results.ssl ? (
                    <div className="flex items-center gap-2 text-green-600">
                      <CheckCircle2 size={20} />
                      <span>مفعّل</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 text-yellow-600">
                      <Clock size={20} />
                      <span>قيد الإعداد</span>
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                  <span className="font-medium">ربط Vercel</span>
                  {results.vercel ? (
                    <div className="flex items-center gap-2 text-green-600">
                      <CheckCircle2 size={20} />
                      <span>متصل</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 text-red-600">
                      <XCircle size={20} />
                      <span>غير متصل</span>
                    </div>
                  )}
                </div>

                <div className="space-y-2 p-3 rounded-lg bg-muted/50">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">انتشار DNS</span>
                    <span className="text-sm font-bold">{Math.round(results.propagation)}%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
                    <div 
                      className="h-full bg-primary transition-all duration-500"
                      style={{ width: `${results.propagation}%` }}
                    />
                  </div>
                  <p className="text-xs text-muted-foreground">
                    قد يستغرق انتشار DNS حتى 48 ساعة
                  </p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* DNS Records */}
        <Card>
          <CardHeader>
            <CardTitle>سجلات DNS المطلوبة</CardTitle>
            <CardDescription>تأكد من إضافة هذه السجلات في Namecheap</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {dnsRecords.map((record, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                >
                  <div className="space-y-1 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">{record.type}</span>
                      <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded">
                        {record.host}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground font-mono">{record.value}</p>
                  </div>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => copyToClipboard(record.value)}
                  >
                    <Copy size={16} />
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Common Issues */}
        <Card>
          <CardHeader>
            <CardTitle>المشاكل الشائعة وحلولها</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {commonIssues.map((issue, index) => (
                <div key={index} className="p-4 rounded-lg border space-y-2">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="text-yellow-600 shrink-0 mt-0.5" size={20} />
                    <div className="space-y-1 flex-1">
                      <h3 className="font-semibold">{issue.title}</h3>
                      <p className="text-sm text-muted-foreground">{issue.description}</p>
                      <p className="text-sm text-primary font-medium">الحل: {issue.solution}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Links */}
        <Card>
          <CardHeader>
            <CardTitle>روابط مفيدة</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3 sm:grid-cols-2">
              <a
                href="https://vercel.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-lg border hover:bg-muted transition-colors group"
              >
                <span className="font-medium">لوحة تحكم Vercel</span>
                <ExternalLink className="text-muted-foreground group-hover:text-foreground transition-colors" size={16} />
              </a>
              <a
                href="https://namecheap.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-lg border hover:bg-muted transition-colors group"
              >
                <span className="font-medium">لوحة تحكم Namecheap</span>
                <ExternalLink className="text-muted-foreground group-hover:text-foreground transition-colors" size={16} />
              </a>
              <a
                href="https://dnschecker.org"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-lg border hover:bg-muted transition-colors group"
              >
                <span className="font-medium">فحص انتشار DNS</span>
                <ExternalLink className="text-muted-foreground group-hover:text-foreground transition-colors" size={16} />
              </a>
              <a
                href="https://www.ssllabs.com/ssltest/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-lg border hover:bg-muted transition-colors group"
              >
                <span className="font-medium">فحص SSL</span>
                <ExternalLink className="text-muted-foreground group-hover:text-foreground transition-colors" size={16} />
              </a>
            </div>
          </CardContent>
        </Card>

        {/* Manual Check Steps */}
        <Card className="border-primary/20 bg-primary/5">
          <CardHeader>
            <CardTitle>خطوات الفحص اليدوي</CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="space-y-3 list-decimal list-inside">
              <li className="text-sm">
                افتح <strong>vercel.com</strong> واذهب إلى Settings ثم Domains
              </li>
              <li className="text-sm">
                تحقق من وجود علامة خضراء بجانب دومينك
              </li>
              <li className="text-sm">
                افتح <strong>namecheap.com</strong> واذهب إلى Advanced DNS
              </li>
              <li className="text-sm">
                تأكد من إضافة A Record و CNAME بالقيم الصحيحة
              </li>
              <li className="text-sm">
                افتح <strong>dnschecker.org</strong> وتحقق من انتشار DNS عالمياً
              </li>
              <li className="text-sm">
                امسح كاش المتصفح بالضغط على Ctrl+Shift+R
              </li>
            </ol>
          </CardContent>
        </Card>

        {/* Support */}
        <Card>
          <CardContent className="pt-6">
            <div className="text-center space-y-2">
              <p className="text-sm text-muted-foreground">
                لا تزال المشكلة موجودة؟
              </p>
              <Button variant="outline" asChild>
                <a href="https://vercel.com/help" target="_blank" rel="noopener noreferrer">
                  اتصل بدعم Vercel
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
